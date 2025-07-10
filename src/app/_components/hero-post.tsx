import CoverImage from "@/app/_components/cover-image";
import Link from "next/link";

export function HeroPost() {
  return (
    <section>
      <div className="mb-8 md:mb-16">
        <CoverImage title="A picture I took of Sossusvlei in 2023, an apt symbol for my online presence" src={"/assets/blog/1-hero-post/cover.jpg"} />
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div>
          <h3 className="mb-4 text-4xl lg:text-5xl leading-tight">
            I don't got much here...
          </h3>
        </div>
        <div>
          <p className="text-lg leading-relaxed mb-4">But you can check out my github. I also wrote a blog post for Artsy awhile ago.</p>
          <div className="max-w-2xl mx-auto">
            <Link href="https://www.github.com/ansor4" className="text-blue-500 hover:text-blue-600">
              Github
            </Link>
          </div>
          <div className="max-w-2xl mx-auto">
            <Link href="https://artsy.github.io/blog/2018/08/24/How-to-debug-jest-tests/" className="text-blue-500 hover:text-blue-600">
              Blog Post
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
