# Modern Blog

A fully responsive, SEO-optimized blog built with Next.js 14 (App Router), Tailwind CSS, and Markdown for content management.

## Features

- Static Site Generation (SSG) for all blog posts
- Markdown-based content with frontmatter metadata
- Paginated homepage with search, category, and tag filtering
- Dynamic blog post pages with slugs
- Dark mode toggle with smooth transitions
- SEO meta tags, Open Graph, and Twitter Card support
- Sitemap.xml and robots.txt generation
- Google Analytics and Google AdSense integration
- Responsive header, footer, and sidebar
- Optimized images with Next.js Image component
- Deployment-ready for Vercel

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/modern-blog.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file and add your Google Analytics and AdSense IDs:
   ```env
   NEXT_PUBLIC_GA_ID=your-google-analytics-id
   NEXT_PUBLIC_ADSENSE_ID=your-google-adsense-id
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

- `app/` - Next.js App Router pages and layouts
- `components/layouts/` - Reusable layout components (Header, Footer, BlogList, Sidebar)
- `components/ui/` - UI components (SearchBar, FilterBar)
- `content/` - Markdown files for blog posts
- `lib/` - Utility functions and post processing logic
- `public/` - Static assets (robots.txt, favicon)

## Adding New Posts

1. Create a new Markdown file in the `content/` folder with the following frontmatter:
   ```markdown
   ---
   title: "Your Post Title"
   date: "YYYY-MM-DD"
   description: "A brief description of your post"
   tags: ["tag1", "tag2"]
   category: "Category Name"
   author: "Author Name"
   featuredImage: "https://example.com/image.jpg"
   ---
   ```

2. Write your post content in Markdown below the frontmatter.

3. The post will automatically appear on the homepage and be accessible at `/posts/your-post-title`.

## Deployment

Deploy to Vercel by pushing to a GitHub repository and connecting it to Vercel. Ensure the `.env` variables are set in Vercel's environment variables dashboard.

## License

MIT License