import CoverImage from "@/app/_components/cover-image";
import Link from "next/link";

type Props = {
  title: string;
  coverImage: string;
  excerpt: string;
  slug: string;
  links?: { [key: string]: string };
};

export function HeroPost({
  title,
  coverImage,
  excerpt,
  slug,
  links,
}: Props) {
  return (
    <section>
      <div className="mb-8 md:mb-16">
        <CoverImage title={title} src={coverImage} slug={slug} />
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div>
          <h3 className="mb-4 text-4xl lg:text-5xl leading-tight">
            {title}
          </h3>
        </div>
        <div>
          <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
          {links?.github && (
            <div className="max-w-2xl mx-auto">
              <Link href={links?.github} className="text-blue-500 hover:text-blue-600">
                Github
              </Link>
            </div>
          )}
          {links?.blog_post && (
            <div className="max-w-2xl mx-auto">
              <Link href={links?.blog_post} className="text-blue-500 hover:text-blue-600">
                Blog Post
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
