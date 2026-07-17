# Task Checklist: Add Privacy & Terms Pages and Update Footer

- [x] Create shared Header component (`src/components/Header.tsx`)
- [x] Create shared Footer component (`src/components/Footer.tsx`)
- [x] Update `src/routes/index.tsx` to use the new Header and Footer components
- [x] Add the Privacy Policy route component (`src/routes/privacy-policy.tsx`)
- [x] Add the Terms & Conditions route component (`src/routes/terms-and-conditions.tsx`)
- [x] Revert custom `nitro` build directory configuration to restore default Vercel compatibility
- [x] Remove `vercel.json` files to resolve CSS asset and routing conflicts
- [x] Push configuration fixes to GitHub to trigger a clean Vercel SSR deployment
- [x] Verify implementation, check route tree regeneration, and test navigation
