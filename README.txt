WAPPENSHAW LIVE — VERCEL SETUP

This version is ready for a shared online leaderboard.

1. Create a NEW Vercel project for this folder/ZIP.
2. In the new project, create/connect a Vercel Blob store.
   Vercel supplies BLOB_READ_WRITE_TOKEN automatically.
3. Add an environment variable:
   ADMIN_PIN = your chosen private PIN
4. Redeploy the project.

ADMIN:
Open the normal site URL.
The first change asks for the Admin PIN.

PLAYERS:
Use the Admin button "Copy Player Link".
That URL opens directly into the read-only leaderboard.
It refreshes automatically every 15 seconds.

Do not share your ADMIN_PIN.

V15: Mobile-friendly Player Leaderboard. Position and Player stay fixed while weeks scroll sideways.
