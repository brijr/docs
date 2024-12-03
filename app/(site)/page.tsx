import { DocsPage } from "fumadocs-ui/page";

export default async function HomePage() {
  return (
    <DocsPage>
      <h1>Bridger Tower / Designer and Developer</h1>
      <p className="text-muted-foreground">
        Welcome to a collection of notes and ideas about design and development.
      </p>
    </DocsPage>
  );
}
