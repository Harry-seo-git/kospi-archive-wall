# Contribution Workflow

All changes should go through GitHub pull requests.

## Standard Flow

1. Create a branch from `main`.
2. Make and verify the change locally.
3. Commit and push the branch.
4. Open a pull request into `main`.
5. Review the Vercel preview deployment.
6. Merge the pull request.
7. Vercel automatically deploys `main` to production.

## Production

Production is served from:

https://kospi-archive-wall.vercel.app

The `main` branch is connected to Vercel production deployments.
