# DevBlog Theme Documentation

DevBlog is a modern, responsive Hugo theme designed for developer blogs. This documentation covers all the configuration options and features available in the theme.

## Table of Contents

- [Basic Configuration](#basic-configuration)
- [Social Media Links](#social-media-links)
- [Hero Section](#hero-section)
  - [Default Style](#default-style)
  - [Minimal Style](#minimal-style)
  - [Image Background Style](#image-background-style)
  - [Custom HTML Style](#custom-html-style)
  - [Custom Links](#custom-links)
  - [Custom Content](#custom-content)
- [About Page](#about-page)
  - [Single Author](#single-author)
  - [Team Page](#team-page)
- [Customization](#customization)
- [Footer Configuration](#footer-configuration)
  - [About Section](#about-section)
  - [Quick Links](#quick-links)
  - [Social Links Section](#social-links-section)
  - [Custom Sections](#custom-sections)
  - [Copyright and Credits](#copyright-and-credits)
- [Archive Page](#archive-page)
- [Math Support](#math-support)

## Basic Configuration

Here's a basic configuration for your `hugo.toml` (formerly `config.toml`):

```toml
baseURL = "https://example.com/"
languageCode = "en-us"
title = "DevBlog"
theme = "devblog"

[params]
  description = "A modern blog for developers, sharing insights and experiences in the world of technology."
```

> Note: Hugo now uses `hugo.toml` as the default configuration filename, though `config.toml` is still supported for backward compatibility.

### Favicon Configuration

Configure your site's favicon by adding these parameters to your `hugo.toml`:

```toml
[params]
  # For complete set of favicons (recommended)
  favicon = "/favicon"  # Points to static/favicon/ directory
  
  # OR for simple favicon
  favicon = "/favicon.ico"  # Points to static/favicon.ico
```

Place your favicon files in either:

1. Complete set (recommended):
   ```
   static/
   └── favicon/
       ├── favicon-16x16.png
       ├── favicon-32x32.png
       ├── apple-touch-icon.png
       └── site.webmanifist
   ```

2. Simple approach:
   ```
   static/
   └── favicon.ico
   ```

## Social Media Links

Configure your social media profiles:

```toml
[params.social]
  github = "yourusername"
  twitter = "yourusername"
  linkedin = "yourusername"
```

## Hero Section

The hero section is highly customizable. You can choose from several predefined styles or create your own.

### Default Style

The default hero style includes a title, description, and social media links.

```toml
[params.hero]
  style = "default"
  title = "Welcome to DevBlog"
  description = "Exploring the world of technology through a developer's eyes."
```

### Minimal Style

A simplified hero section without social links.

```toml
[params.hero]
  style = "minimal"
  title = "DevBlog"
  description = "A technical blog focused on web development"
```

### Image Background Style

Use an image as the hero background. Both local and external URLs are supported:

```toml
# Local image from your static folder
[params.hero]
  style = "image"
  title = "DevBlog"
  description = "Coding insights and tutorials"
  backgroundImage = "/images/hero-background.jpg"

# OR external URL
[params.hero]
  style = "image"
  title = "DevBlog"
  description = "Coding insights and tutorials"
  backgroundImage = "https://example.com/images/background.jpg"
```

### Custom HTML Style

For complete control, you can provide your own HTML.

```toml
[params.hero]
  style = "custom"
  customHTML = "<section class=\"my-custom-hero\"><div class=\"container\"><h1>My Custom Hero</h1></div></section>"
```

### Custom Links

Add custom buttons to the hero section:

```toml
[params.hero]
  style = "default"
  title = "DevBlog"
  description = "A developer's journey through code"
  
  [[params.hero.customLinks]]
    name = "Documentation"
    url = "/docs"
    icon = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z\"></path><path d=\"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z\"></path></svg>"
    class = "outline"
    target = "_blank"
  
  [[params.hero.customLinks]]
    name = "Download"
    url = "/download"
    class = "primary"
```

### Custom Content

Add custom HTML content to the hero section:

```toml
[params.hero]
  style = "default"
  title = "DevBlog"
  description = "Coding tutorials and insights"
  customContent = "<div class=\"newsletter-signup\"><form><input type=\"email\" placeholder=\"Subscribe to our newsletter\"><button type=\"submit\">Subscribe</button></form></div>"
```

### Other Hero Options

```toml
[params.hero]
  # Custom background color (gradient)
  customBackgroundColor = "linear-gradient(to right, #4b6cb7, #182848)"
  
  # Hide social media links
  hideLinks = false
  
  # Disable hero section completely
  disable = false
```

## About Page

DevBlog supports both single author and team-based about pages with automatic layout selection.

### About Page Configuration

Create an `index.md` file in a directory called `about` in your content folder (`content/about/index.md`) with the following structure:

```yaml
---
title: "About Us"
description: "Learn more about the team behind this blog"
startYear: 2022
# Important: This tells Hugo to use the about layout
type: "about"
# ...other parameters as documented below...
```

The `type: "about"` parameter is essential to ensure Hugo uses the correct template for the about page.

Create a file at `content/about/index.md`. The theme will automatically detect whether to use a single author or team layout based on the number of authors/team members provided:

```yaml
---
title: "About Us"
description: "Learn more about the team behind this blog"
startYear: 2022
type: "about"

# Customize section titles (optional)
missionTitle: "Our Mission" # or "My Mission" for single author
topicsTitle: "What We Cover" # or "What I Write About" for single author
teamSectionTitle: "Meet Our Team" # only for team layout
authorSectionTitle: "About the Author" # only for single author layout
valuesTitle: "Our Core Values" # only for team layout
connectTitle: "Get in Touch" # Works for both layouts

# Custom intro text for sections (optional)
mission: |
  Custom mission text that will replace the default text.
  You can use **Markdown** formatting here.

connectText: "Custom text for the connect/join section."
valuesIntro: "Custom intro text for values section."

# Either use authors or team (authors is preferred for newer sites)
authors:
  - name: "John Doe"
    title: "Frontend Developer & Technical Writer"
    # Image can be a local path or a full URL
    image: "/images/john.jpg"  # Local image from your static folder
    # image: "https://example.com/images/john.jpg"  # External URL
    bio: |
      Hi there! I'm John, a frontend developer with over 8 years of experience.
      I specialize in TypeScript, React, and modern JavaScript frameworks.
    github: "johndoe"
    twitter: "johndoe"
    linkedin: "johndoe"
    email: "john@example.com"

  - name: "Jane Smith"
    title: "Backend Developer & Editor"
    image: "https://picsum.photos/id/64/200/300.jpg"  # Using an external URL
    bio: "Cloud architecture specialist with expertise in serverless technologies."
    github: "janesmith"
    twitter: "janesmith"
    linkedin: "janesmith"
```

### Layout Auto-Detection

The theme automatically determines whether to use the single author or team layout based on the following:

1. If `layout` is explicitly set to "single" or "team", that layout will be used
2. Otherwise, if multiple authors/team members are found, the team layout is used
3. If only one author is found, the single author layout is used

### Using Legacy Format

For compatibility with older sites, the theme also supports the legacy format with `author` and `team` parameters:

```yaml
# Legacy single author format
author:
  name: "John Doe"
  title: "Frontend Developer"
  image: "/images/john.jpg"
  bio: "..."
  github: "johndoe"
  # ...other social links

# Legacy team format
team:
  - name: "John Doe"
    role: "Frontend Developer"  # 'role' in legacy format instead of 'title'
    image: "/images/john.jpg"
    # ...other fields
```

## Customization

### Custom CSS

You can add your own CSS by creating a file at `assets/css/custom.css` and then referencing it in your config:

```toml
[params]
  customCSS = ["css/custom.css"]
```

### Custom Scripts

Add custom JavaScript:

```toml
[params]
  customJS = ["js/custom.js"]
```

### Content Organization

DevBlog expects your content to be organized as follows:

- Blog posts: `content/posts/`
- About page: `content/about/`
- Archive: Automatically generated from `content/posts/`

### Front Matter for Posts

```yaml
---
title: "Getting Started with Hugo"
date: 2023-01-01
author: "John Doe"
description: "A beginner's guide to creating a blog with Hugo"
tags: ["hugo", "tutorial", "beginner"]
categories: ["tutorials"]
---
```

> Note: Reading time is automatically calculated based on content length. You don't need to specify it manually in the front matter.

## Footer Configuration

The footer is highly customizable with multiple sections that can be configured via your site's configuration file.

### About Section

Customize the about section in the footer:

```toml
[params.footer]
  aboutTitle = "About DevBlog"  # Default: "About [site.Title]"
  aboutContent = "A custom about text for the footer that can be different from the site description."
  
  # Add buttons below about text (optional)
  [[params.footer.aboutButtons]]
    name = "Contact"
    url = "/contact"
    icon = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z\"></path></svg>"
  
  [[params.footer.aboutButtons]]
    name = "Subscribe"
    url = "#newsletter"
    class = "primary"
```

### Quick Links

Customize the links section in the footer:

```toml
[params.footer]
  linksTitle = "Navigation"  # Default: "Quick Links"
  
  # Custom links (optional - if not provided, standard Home/About/Archive links will be used)
  [[params.footer.customLinks]]
    name = "Home"
    url = "/"
  
  [[params.footer.customLinks]]
    name = "Blog"
    url = "/posts"
  
  [[params.footer.customLinks]]
    name = "Projects"
    url = "/projects"
  
  [[params.footer.customLinks]]
    name = "Documentation"
    url = "/docs"
    target = "_blank"
```

### Social Links Section

Add a social media section to the footer:

```toml
[params.footer]
  showSocialSection = true
  socialTitle = "Connect With Me"  # Default: "Connect"
  
  # Uses the same social profiles from params.social + any custom ones below
  [[params.footer.customSocialLinks]]
    name = "RSS"
    url = "/index.xml"
    icon = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 11a9 9 0 0 1 9 9\"></path><path d=\"M4 4a16 16 0 0 1 16 16\"></path><circle cx=\"5\" cy=\"19\" r=\"1\"></circle></svg>"
```

### Custom Sections

Add additional custom sections to the footer:

```toml
[params.footer]
  extendedLayout = true  # Changes layout to support multiple columns
  
  [[params.footer.customSections]]
    title = "Resources"
    
    [[params.footer.customSections.links]]
      name = "Getting Started Guide"
      url = "/getting-started"
    
    [[params.footer.customSections.links]]
      name = "Documentation"
      url = "/docs"
    
    [[params.footer.customSections.links]]
      name = "API Reference"
      url = "/api"
  
  [[params.footer.customSections]]
    title = "Legal"
    content = "© 2024 Example Corp. [Privacy Policy](/privacy) · [Terms of Service](/terms)"
```

### Copyright and Credits

Customize the copyright notice and theme credits:

```toml
[params.footer]
  copyright = "&copy; 2024 Your Company. Some rights reserved."
  showCredits = false  # Set to false to remove "Powered by Hugo | Theme DevBlog"
```

## Archive Page

DevBlog comes with a built-in archive page that organizes all your blog posts by year in a clean, scannable format.

### Basic Setup

Create a file at `content/archive.md`:

```yaml
---
title: "Archive"
description: "Browse all posts by date"
layout: "archive"
---
```

### Archive Configuration

Customize the archive page appearance in your site configuration:

```toml
[params.archive]
  # Choose layout style: "standard" (default) or "compact"
  style = "standard"
  
  # Enable search functionality for archive page
  showSearch = true
```

#### Standard Style

The standard style displays each post with its date, title, summary, and meta information, organized by year.

#### Compact Style

The compact style shows a more condensed list with just dates and titles, perfect for sites with many posts.

## Math Support

DevBlog includes built-in support for mathematical expressions using KaTeX. You can write both inline and display math expressions in your Markdown content.

### Configuration

Math rendering is enabled by default. To disable it:

```toml
[params.math]
  disable = true
```

### Using Math Expressions

DevBlog supports the following delimiters for math expressions:

1. Inline math with single dollar signs: `$E = mc^2$
2. Inline math with `\( ... \)`: `\(E = mc^2\)`
3. Display math with double dollar signs:
   ```
   $$
   \frac{d}{dx}e^x = e^x
   $$
   ```
 4. Display math with `\[ ... \]`:
   ```
   \[
   \frac{d}{dx}e^x = e^x
   \]
   ```

### Examples

Inline equation: $E = mc^2$ will appear inline with your text.

Display equation:

$$
\frac{d}{dx}\left( \int_{0}^{x} f(u)\,du\right)=f(x)
$$

**Note**: Sometimes complex math expressions might require additional escaping when used in Markdown.

## Code Blocks

DevBlog includes several enhancements to make code blocks more useful:

### Code Copying

All code blocks on your site will automatically have a copy button that appears when users hover over the block. This makes it easy for readers to copy code examples with a single click.

### Code Highlighting

The theme uses Hugo's built-in syntax highlighting capabilities. You can specify the language for a code block using the standard Markdown syntax:

```go
// Go code example
func main() {
    fmt.Println("Hello, world!")
}
```

### Interactive Elements

The theme includes several interactive elements for better user experience:

1. **Clickable Post Cards**: The entire blog post card is clickable, making it easier for users to navigate to articles
2. **Navigation Links**: 
   - Author names link to the about page
   - Post dates link to the archive page
   - Current section is highlighted in the main navigation
3. **Code Copy**: Code blocks include a copy button on hover
4. **KaTeX Support**: Mathematical expressions render automatically
