// Simple Markdown to HTML parser for articles
function parseMarkdown(markdown) {
    let html = markdown;

    // Parse frontmatter (YAML between --- markers)
    const frontmatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;
    const match = html.match(frontmatterRegex);

    let metadata = {};
    if (match) {
        const frontmatter = match[1];
        html = match[2];

        // Parse frontmatter into object
        frontmatter.split('\n').forEach(line => {
            const [key, ...valueParts] = line.split(':');
            if (key && valueParts.length) {
                const value = valueParts.join(':').trim().replace(/^["']|["']$/g, '');
                metadata[key.trim()] = value;
            }
        });
    }

    // Headers
    html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
    html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
    html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');

    // Bold
    html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    html = html.replace(/__(.*?)__/g, '<strong>$1</strong>');

    // Italic
    html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');
    html = html.replace(/_(.*?)_/g, '<em>$1</em>');

    // Links
    html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');

    // Images with caption
    html = html.replace(/!\[([^\]]*)\]\(([^)]+)\)\n\*([^*]+)\*/g,
        '<figure><img src="$2" alt="$1"><figcaption>$3</figcaption></figure>');

    // Images without caption
    html = html.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1">');

    // Blockquotes
    html = html.replace(/^> (.*$)/gim, '<blockquote>$1</blockquote>');

    // Code blocks
    html = html.replace(/```([\s\S]*?)```/g, '<pre><code>$1</code></pre>');

    // Inline code
    html = html.replace(/`([^`]+)`/g, '<code>$1</code>');

    // Unordered lists
    html = html.replace(/^\* (.*$)/gim, '<li>$1</li>');
    html = html.replace(/^- (.*$)/gim, '<li>$1</li>');
    html = html.replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>');

    // Ordered lists
    html = html.replace(/^\d+\. (.*$)/gim, '<li>$1</li>');

    // Paragraphs (lines with content not already wrapped in tags)
    html = html.split('\n\n').map(block => {
        if (!block.match(/^<[^>]+>/)) {
            return `<p>${block}</p>`;
        }
        return block;
    }).join('\n');

    return { html, metadata };
}

// Load and render article from markdown file
async function loadArticle(markdownPath, targetElement) {
    try {
        const response = await fetch(markdownPath);
        const markdown = await response.text();
        const { html, metadata } = parseMarkdown(markdown);

        // Render article
        if (targetElement) {
            targetElement.innerHTML = html;
        }

        return { html, metadata };
    } catch (error) {
        console.error('Error loading article:', error);
        return null;
    }
}

// Generate article list from markdown files
async function generateArticleList(articles, containerElement) {
    if (!containerElement) return;

    const articlePromises = articles.map(async (articlePath) => {
        const response = await fetch(articlePath);
        const markdown = await response.text();
        const { metadata } = parseMarkdown(markdown);
        return { ...metadata, path: articlePath };
    });

    const articlesData = await Promise.all(articlePromises);

    // Sort by date (newest first)
    articlesData.sort((a, b) => new Date(b.date) - new Date(a.date));

    // Render article cards
    articlesData.forEach(article => {
        const card = createArticleCard(article);
        containerElement.appendChild(card);
    });
}

// Create article card element
function createArticleCard(article) {
    const card = document.createElement('a');
    card.href = article.path.replace('.md', '.html');
    card.className = 'article-card';

    const thumbnail = article.featuredImage || '/images/articles/default.jpg';

    card.innerHTML = `
    <div class="article-card-thumbnail">
      <img src="${thumbnail}" alt="${article.title}">
    </div>
    <div class="article-card-content">
      <h3 class="article-card-title">${article.title}</h3>
      <p class="article-card-description">${article.description}</p>
      <div class="article-card-meta">
        <span>${article.author || 'Adrian Chen'}</span>
        <span>${formatDate(article.date)}</span>
        <span>${article.readTime || '5 min read'}</span>
      </div>
    </div>
  `;

    return card;
}

// Format date for display
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

// Calculate reading time from text
function calculateReadTime(text) {
    const wordsPerMinute = 200;
    const words = text.trim().split(/\s+/).length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return `${minutes} min read`;
}

// Export functions for use in article pages
if (typeof window !== 'undefined') {
    window.MarkdownParser = {
        parse: parseMarkdown,
        loadArticle,
        generateArticleList,
        formatDate,
        calculateReadTime
    };
}
