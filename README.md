# React + TypeScript + Vite + Solana Wallet Adapter
Vite TS template with Solana Wallet Adapter added. 

## Setup and run
```sh
yarn
yarn dev
```

Open [http://localhost:5173/](http://localhost:5173/) to see the app.

It's configured to use polling for hot reload to make it work with WSL. You can undo this by removing the `server.watch.usePolling` option from `vite.config.ts`:

```diff
// vite.config.ts
export default defineConfig({
  plugins: [react()],
-  server: {
-    watch: {
-     usePolling: true,
-    },
-  },
})
```

This will make hot reloads faster but they won't work on WSL.
