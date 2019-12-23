export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e0121e8e0f80a3186286a62',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-zr3fiyub',
                  apiId: '784dae70-9baf-4c90-9cff-ac91a2bc8569'
                },
                {
                  buildHookId: '5e0121e8ee2d9f66380fcdc4',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-af3hm6xt',
                  apiId: '913ec9af-ae19-4caa-a3f5-953cce5f5106'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jaequery/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-af3hm6xt.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
