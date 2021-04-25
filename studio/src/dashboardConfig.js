export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "6084d20b4d5948a71f5ac64c",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-8f9egr27",
                  apiId: "659ef526-f434-4297-8b41-4e4264dc8df4",
                },
                {
                  buildHookId: "6084d20b4935d26a2bd88bfc",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-xy345bwo",
                  apiId: "9569a0ef-982d-4bf6-a7f9-afa1cd706091",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/DavidNeiOs/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-xy345bwo.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
