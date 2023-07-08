import { g, auth, config } from '@grafbase/sdk'

const User = g.model('User', {
  name: g.string().length({min: 2, max:20}),
  email: g.string().unique(),
  avatarUrl: g.url(),
  description: g.string().optional(),
  githubUrl: g.url().optional(),
  linkedInUrl: g.url().optional(),
  projects: g.relation(()=>Project).list().optional(),

})

const Project = g.model('Project', {
  title: g.string().length({min: 2}),
  description: g.string(),
  imageUrl: g.url(),
  liveSiteUrl: g.url().optional(),
  githubUrl: g.url(),
  category: g.string().search(),
  CreatedBy: g.relation(()=>User),
})

const jwt = auth.JWT({
  issuer: 'grafbase',
  secret: g.env('AUTH_SECRET')
})

export default config({
  schema: g,
  auth: {
    providers: [jwt]
  }
})
