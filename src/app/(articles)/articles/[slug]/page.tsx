import { allArticles, Article as ArticleType } from "contentlayer/generated";

import BackLink from "@/components/ui/BackLink";
import Newsletter from "@/components/ui/Newsletter";

import { Alexandria } from "next/font/google";
import TagsList from "./_components/TagsList";
import SidebarLinks from "./_components/SidebarLinks";
import ArticleHeader from "./_components/ArticleHeader";
import ArticleSeries from "./_components/ArticleSeries";
import MdxWrapper from "./_components/mdx/MdxWrapper";
import Image from "next/image";

const alexandria = Alexandria({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  preload: true,
});

const Page = async ({ params }: { params: { slug: string } }) => {
  const article = allArticles.find(
    (post: ArticleType) => post.slug === params.slug,
  );

  return (
    <main className="min-h-svh !px-4 pt-6 md:px-0 md:pt-11">
      <BackLink href="/articles">back</BackLink>

      <ArticleHeader
        title={article?.title as string}
        publishedAt={article?.publishedAt as string}
        shareLink={article?.shareLink as string}
      />

      {/* Hero Image Section */}
      {article?.image && (
        <>
          <Image
            src={article?.image}
            alt={`${article.title} article image`}
            width={600}
            height={350}
            className="mx-auto w-[calc(100%+48px)] max-w-none animate-in md:rounded-lg lg:w-[calc(100%)]"
            style={{ "--index": 2 } as React.CSSProperties}
            priority
            quality={100}
          />
          <div className="h-16" />
        </>
      )}

      {/* body section */}
      <section className="flex sm:gap-x-6 md:gap-x-14">
        <div className="w-full space-y-6">
          {/* Series Component */}
          {article?.hasSeries && <ArticleSeries />}

          <div
            className={`prose prose-neutral animate-in text-caption2 text-text-primary prose-p:font-light md:text-body2 ${alexandria.className} prose-headings:text-text-primary prose-h1:text-title2 prose-h2:text-title3 prose-h3:text-body1 prose-h4:text-body1 prose-h5:text-body2 prose-h6:text-body2 prose-blockquote:text-text-primary prose-strong:text-text-primary`}
            style={{ "--index": 3 } as React.CSSProperties}
          >
            <MdxWrapper code={article?.body?.code as string} />
          </div>
        </div>

        {/* SIDEBAR OF SINGLE ARTICLES */}
        <SidebarLinks />
      </section>

      {/* TAGS SECTION */}
      <TagsList tags={article?.tags} />

      {/* NEWSLETTER SECTION */}
      <Newsletter />
    </main>
  );
};

export default Page;
