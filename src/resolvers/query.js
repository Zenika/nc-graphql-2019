module.exports = {
  plaine: (root, args, context, info) => {
    return context.prisma.plaine({id: args.id})
  },
  plaines: (root, args, context, info) => {
    return context.prisma.plaines()
  },
  mare: (root, args, context, info) => {
    return context.prisma.mare({id: args.id})
  },
  mares: (root, args, context, info) => {
    return context.prisma.plaine({id: args.plaineId}).mares()
  },
  canard: (root, args, context, info) => {
    return context.prisma.mare({id: args.mareid}).canard({id: args.id})
  },
  canards: (root, args, context, info) => {
    return context.prisma.mare({id: args.mareid}).canards()
  },
  allCanards: (root, args, context, info) => {
    return context.prisma.canards()
  },
  allPoissons: (root, args, context, info) => {
    return context.prisma.poissons()
  },
  poissons: (root, args, context, info) => {
    return context.prisma.mare({id: args.mareId}).poissons()
  },
  apiRestGeo: (root, args, context, info) => {
    return fetch('https://geo.api.gouv.fr/departements?fields=nom,code,codeRegion,region')
      .then(res => res.json())
  },
  apiFatecFournisseur: (root, args, context, info) => {
    return fetch('http://localhost:3000/api/fournisseurs/search', {headers: {Authorization:'Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICI1VmZ3YzBVd0ZpeTUyd2N4UzJidzREVmRpMk5HUVM3TjFmaWExQUZOZWhnIn0.eyJqdGkiOiJkMWExMDQ4MC02ZTYyLTQ2NGEtYjE4My1kZWZlN2MyNzBiOTAiLCJleHAiOjE1NzY2NzUxMDcsIm5iZiI6MCwiaWF0IjoxNTc2NjczMzA3LCJpc3MiOiJodHRwOi8vMTAuMC4zLjE6ODA4My9hdXRoL3JlYWxtcy9GQVRFQyIsImF1ZCI6ImFjY291bnQiLCJzdWIiOiJhYjI5OWVlNy0yNDM2LTRjOWYtOWM0Zi1lOGI3MDg5YTJmNTUiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJzdGFyZmxlZXQtd2ViIiwibm9uY2UiOiI2MTlmMjMwYS1lZDNjLTQyNTYtOTAxZC00MDZhMzg3N2RmODkiLCJhdXRoX3RpbWUiOjE1NzY2NzMzMDUsInNlc3Npb25fc3RhdGUiOiIzNjE5ODA3My1kNDM3LTQxYzQtYjA4MS02Nzk4NjZkNGQyMDkiLCJhY3IiOiIxIiwiYWxsb3dlZC1vcmlnaW5zIjpbImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MCIsImh0dHA6Ly8xMC4wLjMuOTo4MDgwIiwiaHR0cDovL2RlbW8uZmF0ZWMtZ3JvdXAuY29tOjgwODAiLCJodHRwOi8vMTAuMC4zLjQ6ODA4MCIsImh0dHA6Ly9yZWNldHRlLmZhdGVjLWdyb3VwLmNvbTo4MDgwIiwiaHR0cDovL2xvY2FsaG9zdDozMDAwIiwiaHR0cDovLzEwLjAuMS40MDo4MDgwIiwiaHR0cDovLzEwLjAuMy42OjgwODAiLCJodHRwOi8vZGVtb2NsaWVudC5mYXRlYy1ncm91cC5jb206ODA4MCJdLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiU1RBUkZMRUVUX1BFUk1JU1NJT05fRk9VUk5JU1NFVVJfVVBEQVRFX1BSRVNUQVRJT05TIiwiU1RBUkZMRUVUX1BFUk1JU1NJT05fRk9VUk5JU1NFVVJfQ1JFQVRJT04iLCJTVEFSRkxFRVRfUEVSTUlTU0lPTl9GT1VSTklTU0VVUl9VUERBVEVfQ09NTUVOVEFJUkUiLCJTVEFSRkxFRVRfUEVSTUlTU0lPTl9GT1VSTklTU0VVUl9VUERBVEVfSURFTlRJRklDQVRJT04iLCJTVEFSRkxFRVRfUEVSTUlTU0lPTl9GT1VSTklTU0VVUl9VUERBVEVfVEFSSUZTIiwiU1RBUkZMRUVUX1BFUk1JU1NJT05fUkVTRUFVX0NSRUFUSU9OIiwiU1RBUkZMRUVUX1BFUk1JU1NJT05fRk9VUk5JU1NFVVJfQ0hBTkdFUl9DRU5UUkVfUkVHTEVNRU5UIiwidXRpbGlzYXRldXIiLCJTVEFSRkxFRVRfUk9MRV9TVVBFUl9BRE1JTiIsIm9mZmxpbmVfYWNjZXNzIiwiU1RBUkZMRUVUX1BFUk1JU1NJT05fRk9VUk5JU1NFVVJfVVBEQVRFX0NPTlRBQ1RTIiwiU1RBUkZMRUVUX1BFUk1JU1NJT05fRk9VUk5JU1NFVVJfQ0xPVFVSRSIsInVtYV9hdXRob3JpemF0aW9uIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJvcGVuaWQgcHJvZmlsZSBlbWFpbCIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwibmFtZSI6IkFsZXhpcyBCcm9uZXMiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJhbGV4aXMiLCJnaXZlbl9uYW1lIjoiQWxleGlzIiwibG9jYWxlIjoiZnIiLCJmYW1pbHlfbmFtZSI6IkJyb25lcyIsImVtYWlsIjoiYWxleGlzLmJyb25lc0B6ZW5pa2EuY29tIn0.Xyh4kIjFjkP5uu-Az92Dsx1gPuHC51Kx91weYVV4jIkNjoziiQRd4Yo_UumA5Do9PBiFLEwvMn6PkGLi-GR-qyUQa6mhXbuoplWj6LLxueUYj_ajL7Q5BHuNE3ur32FwdxZxtXgjhe6x1v_3eYDA9hg5QujQFvl9Xf4H6EuOdRMeCs0NLABzKEhtvJxrpayXDow4YjnYLkik70WOkQMjC-Vk0j5DUjPG1cyZkLpPo0TGm4nzaZ-7QIASrqsqzChkG1dEzgnDBItZXzLVNcQ5kqpA66p4MW77kK3LYb4u0Cp3KGTH8HJpm2xSz7TXSuPrEvWI4j395LUwVi-SiUL2Dw'}})
      .then(res => res.json())
      // .then(data => console.log("aaaaa",data) || data)
  }
}
