# 🚀 BE IN BAGO — GITHUB & VERCEL DEPLOYMENT GUIDE

**Your project is ready to push to GitHub and deploy to Vercel!**

---

## ✅ WHAT'S BEEN DONE

- ✅ Git repository initialized
- ✅ All files committed (35 files, 4,847 lines)
- ✅ Branch: `master`
- ✅ Commit: `bd39535` - "Initial commit: Be In Bago tourism website"
- ✅ Working directory clean (no uncommitted changes)

**You're ready for Step 1!**

---

## 📋 STEP-BY-STEP DEPLOYMENT

### **STEP 1: Create GitHub Repository**

1. **Go to GitHub**: https://github.com/new

2. **Create the repository**:
   - **Repository name**: `be-in-bago` (or `be-in-BAGO`)
   - **Description**: "Official tourism website for Be In Bago, Bago City, Negros Occidental"
   - **Visibility**: ✅ **Public** (required for free Vercel hosting)
   - **DO NOT check any boxes**:
     - ❌ Don't add README
     - ❌ Don't add .gitignore
     - ❌ Don't choose a license
   - Click **"Create repository"**

3. **Copy the repository URL** that appears (you'll need it for Step 2)
   - Should look like: `https://github.com/ICTcmd/be-in-bago.git`

---

### **STEP 2: Connect Local Repository to GitHub**

**Open Command Prompt or PowerShell in the project folder:**

```bash
cd "c:\Users\OJTBEEG\Desktop\Be in Bago"
```

**Add GitHub as remote:**
```bash
git remote add origin https://github.com/YOUR-USERNAME/be-in-bago.git
```

⚠️ **Replace `YOUR-USERNAME` with your actual GitHub username!**

**Example:**
```bash
git remote add origin https://github.com/ICTcmd/be-in-bago.git
```

---

### **STEP 3: Rename Branch to Main (Optional but Recommended)**

```bash
git branch -M main
```

This renames `master` to `main` (GitHub's default branch name).

---

### **STEP 4: Push to GitHub**

```bash
git push -u origin main
```

**What happens:**
- Your code uploads to GitHub
- `-u` sets up tracking (future pushes just need `git push`)
- Takes 10-30 seconds depending on internet speed

**Expected output:**
```
Enumerating objects: ...
Counting objects: 100% ...
Writing objects: 100% ...
Total 35 (delta 0), reused 0 (delta 0)
To https://github.com/YOUR-USERNAME/be-in-bago.git
 * [new branch]      main -> main
Branch 'main' set up to track remote branch 'main' from 'origin'.
```

✅ **Success!** Your code is now on GitHub.

---

### **STEP 5: Deploy to Vercel**

1. **Go to Vercel**: https://vercel.com/new

2. **Sign in with GitHub** (if not already signed in)

3. **Import your repository**:
   - You should see `be-in-bago` in the list
   - Click **"Import"** next to it
   - If you don't see it, click "Add GitHub Account" and authorize Vercel

4. **Configure project** (Vercel auto-detects settings):
   - **Framework Preset**: Other (or leave as detected)
   - **Root Directory**: `./` (leave as default)
   - **Build Command**: (leave empty - it's a static site)
   - **Output Directory**: (leave empty or `./`)
   - Click **"Deploy"**

5. **Wait for deployment** (~30 seconds):
   - Vercel builds and deploys your site
   - You'll see a preview of the site
   - When complete, you'll see: "🎉 Congratulations!"

6. **Get your live URL**:
   - Vercel gives you: `https://be-in-bago.vercel.app`
   - Or similar: `https://be-in-bago-xxx.vercel.app`

✅ **Your website is now LIVE!**

---

## 🌐 YOUR LIVE WEBSITE

Once deployed, your website will be available at:

**Vercel URL**: `https://be-in-bago.vercel.app`

**Features:**
- ✅ HTTPS enabled automatically (SSL certificate)
- ✅ Global CDN (fast worldwide)
- ✅ Auto-deploy on every GitHub push
- ✅ Free hosting forever (for this size project)
- ✅ Custom domain support (if you want to buy one later)

---

## 🔄 MAKING UPDATES AFTER DEPLOYMENT

**Every time you make changes:**

1. **Edit your files** (index.html, CSS, images, etc.)

2. **Commit changes**:
   ```bash
   git add .
   git commit -m "Update: description of what you changed"
   ```

3. **Push to GitHub**:
   ```bash
   git push
   ```

4. **Vercel auto-deploys** (30 seconds later, your site is updated!)

**That's it!** No manual deployment needed.

---

## 📱 SHARING YOUR WEBSITE

### On Facebook:

1. **Post the URL**: `https://be-in-bago.vercel.app`

2. **Facebook will show a preview card** with:
   - BE IN BAGO cover image
   - Title: "Be In Bago | Discover Bago City"
   - Description: "More than a destination..."

3. **If preview doesn't show**:
   - Use Facebook Debugger: https://developers.facebook.com/tools/debug/
   - Enter your URL and click "Scrape Again"

### Update Facebook Page:

- Add website link to your Facebook page
- Pin a post about the new website
- Share in relevant groups
- Update bio to include website URL

---

## 🎯 QUICK COMMAND REFERENCE

**Check status:**
```bash
git status
```

**View commits:**
```bash
git log --oneline
```

**Make changes and update:**
```bash
git add .
git commit -m "Your change description"
git push
```

**View remote:**
```bash
git remote -v
```

---

## 🛠️ TROUBLESHOOTING

### Problem: "Remote origin already exists"

**Solution:**
```bash
git remote remove origin
git remote add origin https://github.com/YOUR-USERNAME/be-in-bago.git
```

### Problem: Push is rejected

**Solution:**
```bash
git pull origin main --rebase
git push origin main
```

### Problem: Vercel deployment failed

**Check:**
- Vercel dashboard for error messages
- Make sure `vercel.json` exists
- Check `index.html` is in root folder
- GitHub repository is public

### Problem: Images not showing on live site

**Check:**
- Image paths are relative (start with `assets/`)
- Images are committed to Git (`git status` shows nothing)
- No spaces in filenames
- Clear browser cache (Ctrl+Shift+Delete)

---

## 📊 CURRENT PROJECT STATUS

**Git Status:**
- ✅ Repository: Initialized
- ✅ Branch: master (rename to main in Step 3)
- ✅ Commit: bd39535
- ✅ Files: 35 files committed
- ✅ Status: Clean (ready to push)

**Files Included:**
- ✅ Homepage (index.html)
- ✅ Design system (main.css)
- ✅ JavaScript (main.js)
- ✅ All images organized
- ✅ Documentation (5 markdown files)
- ✅ Configuration (vercel.json, robots.txt, .gitignore)
- ✅ Image contact sheet
- ✅ JSON data files

**What's NOT included** (.gitignore prevents):
- ❌ System files (.DS_Store, Thumbs.db)
- ❌ Editor files (.vscode/, .idea/)
- ❌ Node modules (if added later)
- ❌ Environment variables (.env)

---

## 🎉 NEXT STEPS

**Right now:**
1. ✅ Follow Step 1: Create GitHub repository
2. ✅ Follow Step 2-4: Push your code
3. ✅ Follow Step 5: Deploy to Vercel
4. ✅ Share your live URL!

**After deployment:**
1. ⏳ Test website on mobile and desktop
2. ⏳ Share on Facebook
3. ⏳ Identify the 6 numbered images
4. ⏳ Update content as needed
5. ⏳ Monitor visitor feedback

---

## 📞 NEED HELP?

**GitHub Issues:**
- Can't create repository? → Sign in to GitHub first
- Repository name taken? → Try `be-in-bago-tourism`
- Permission denied? → Check GitHub authentication

**Git Issues:**
- Command not found? → Install Git: https://git-scm.com/download/win
- Authentication failed? → Set up GitHub credentials
- Push rejected? → Use `git pull --rebase` first

**Vercel Issues:**
- Can't import? → Make sure repository is public
- Deployment failed? → Check Vercel logs
- Site not updating? → Wait 30 seconds, clear cache

---

## ✅ DEPLOYMENT CHECKLIST

Before deploying:
- [x] Git initialized
- [x] All files committed
- [x] Working directory clean
- [ ] GitHub repository created
- [ ] Remote added
- [ ] Code pushed to GitHub
- [ ] Vercel connected
- [ ] Website deployed
- [ ] Live URL working
- [ ] Shared on Facebook

After deploying:
- [ ] Test on mobile
- [ ] Test on desktop
- [ ] Check all navigation
- [ ] Verify images load
- [ ] Test Facebook preview
- [ ] Share with team

---

## 🎯 EXPECTED TIMELINE

- **Step 1**: Create GitHub repo → 2 minutes
- **Step 2-4**: Push to GitHub → 2 minutes
- **Step 5**: Deploy to Vercel → 3 minutes
- **Testing**: Test live site → 5 minutes

**Total Time**: ~12 minutes to go live!

---

**Ready to deploy? Let's go!** 🚀

Start with **STEP 1**: Create your GitHub repository at https://github.com/new

---

*Last Updated: October 16, 2026*  
*Status: Git initialized, ready to push*
