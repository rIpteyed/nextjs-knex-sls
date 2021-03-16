This is a [Next.js](https://nextjs.org/) POC project.

## Stack
- Next.js (including Tailwind CSS for UI styling and React Components)
- Knex.js - ORM
- Serverless Framework

To run locally:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

##To deploy to AWS:

1. you'll need to setup your AWS configuration:
```
sls config credentials --provider aws --key [key] --secret [secret]
``` 

2. Add a serverless.yml file to the root of the project.  Here is the one we're using for this project:
```
nextjs-blog-sls:
  component: "@sls-next/serverless-component@1.19.0-alpha.37"
  inputs:
    bucketName: [bucketname]
    build:
      env:
        HOST: [RDS Hostname]
        USER: [postgres user]
        PASSWORD: [postress password]
        DATABASE: [database name]
```

3. You'll need to add an RDS PostgreSQL instance and update the DB credentials in the SLS environment variables as above.
