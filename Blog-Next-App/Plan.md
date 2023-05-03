Here I will list out all the thought process while I will be building this app and keep you guys updated what goes in my mind and how do I proceed with the app.

## 2.05.2023 :

---

1. First set up the routes which your app will be going to have. - for the time being I will only have main 4 routes such as -

   - Main Homepage
   - posts page -- which will then have two specifics
     - one is the main posts page where we list out all the blogs...
     - other being the slug page for individual posts.
   - contact me page
   - Also can add About me page..

2. Now once this is done, we can now focus upon how our UI is going to look like.

   - Let's start with the Homepage - This I will see and design on FIgma and then will try to implement on NextUI.
   - Then Design the ContactMe page.
   - And AllPosts and SinglePosts Page as well.

3. Home Page will have 2 main sections:

   a. The Hero Section...

   b. The Featured Posts section. - For now we can show some dummy data, then we can move forward with linking in the future.

4. So, I have not yet designed the Hero Section but I have gone with the basic template for Hero Section with an image and a h1 text.

## 03.05.2023 :

---

5. Currently working on Featured Posts component.

6. I have also deisgned the Navbar which i have implemented, looks great though!

7. I will have to change the PostGrid and PostItem as per what i will need, but for now I think It's good.

8. I have designed a basic structure of how the Blog post would look like and I think I will continue with that as of now. Later maybe if different design idea comes, I might change my mind...

9. All posts page and Home page are done, I have to tweak the design bit here and there but I think I will leave it for last and for now just complete the basic setting up all the routes and data in there.

## 04.05.2023

---

10. I have to design the Single post page from scratch... Very bad design as of now...

11. Writing JSX with markdown : package used : react-markdown - very handy while using Markdowns..

12. Added selection pseudo code for entire body.

13. wrapping text and fields inside 
 `--- 
 {content} 
 ---` treats things as a meta data(gray-matter).

 14. We used gray-matter library to use metadata and content within the markdown files to show fields like title, slug etc.

15. All the helper fucntion used in fetching data is included in lib folder which consists of posts-util file. There we use fs and path from node to read every file inside the **blogPosts** folder, which are markdown files and then we filter out the data and content from there to distinguish what to show and what to filter and then we created helper functions to extarct the allposts and featuredPosts from there to present out data in the UI.

16. using that we can then getAllPosts and featuredPosts.

-- note: slug and the fileName inside the markdown file should be the same as we are fetching accoring  to that in file and setting the slug according to that.

17. 
