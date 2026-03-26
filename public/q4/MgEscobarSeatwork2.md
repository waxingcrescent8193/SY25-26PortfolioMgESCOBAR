# Seatwork #2 - Getting to know CSS Position and z-index.
### This seatwork will ask you to implement the different CSS position on a given code.
### short link to this .md file is: https://bit.ly/4c61P9K
#### Resources (also found in Khub week 5)
- [4 Minute Youtube Video on CSS Position](https://www.youtube.com/watch?v=YEmdHbQBCSQ)
- [CSS Position Tutorial](https://roycan.github.io/CssPositioningZIndexLab/)

### Instructions: 
1. This is individual submission in khub, but you can work with a partner.  When you submit in khub please place both your names in the submission bin.
2. Guided Activity (30 minutes), please follow what is being required.  

    - Make a copy of this .md file to your Q4 repository and name it as **SectionLNseatwork2.md** example **9LiCruzSeatwork2.md**. Place it in your q4 repository vscode local computer. Committing frequently to your Github repository.  
    - Copy the code below and paste it inside a new file (name it as SectionLNseatwork2.html). Place this file in the same location where the .md file is saved. 
    - Change the content values of the meta tags to your names for author/s and the date today for revised.
    - Please do the following tasks that will ask you to reposition HTML elements then answer the guided question for each task on the .md file. Commit changes to the .md file and to the .html file as well.
    **- This seatwork is worth 20pts and should be submitted by the end of the period** The link to [KHub submission bin](https://khub.mc.pshs.edu.ph/mod/assign/view.php?id=15481).
      - Submit the links to your .md file and .html file.

```html
<!DOCTYPE html>
<html>
<head>
  <meta name="author" content="<your names>" />
  <meta name="revised" content="<date today>" />
  <style>
    body { font-family: Arial, sans-serif; }
    .header, .footer {
      background: lightblue;
      padding: 10px;
    }
    .footer {
       opacity: 0.5;
    }
    .sidebar {
      background: lightgreen;
      width: 150px;
      height: 200px;
    }
    .content {
      background: lightyellow;
      width: 300px;
      height: 200px;
    }    
  </style>
</head>
<body>
  <div class="header">Header</div>
  <div class="sidebar">Sidebar</div>
  <div class="content">Main Content</div>
  <div class="footer">Footer</div>
</body>
</html>
```
### Step 1 (Static vs Relative):

- Add in css ```position: relative; top: 20px; left: 20px;``` to .sidebar.

- Guided Question: What changed compared to the default static positioning? Try to give different values to top and left or you can change it to bottom, right.
  - *Answer: The sidebar moved 20 pixels above and 20 pixels to the left of its static position.*

### Step 2 (Fixed):

- Add in css ```position: fixed; bottom: 0; width: 100%;``` to .footer.

- Guided Question: What happens when you scroll the page? Why does the footer behave differently from position relative?
  - *Answer: When I scroll the page, the footer stays at very bottom of the page. It behaves differently from position relative, since the fixed position makes it so that the element is at a certain position relative to the screen, unlike relative which is relative to its original position*

### Step 3 (Absolute):

- Add in css ```position: absolute; top: 66px; left: 200px;``` to .content.

- Guided Question: What is the effect of position: absolute on an element? How is it different from fixed?
  - *Answer: position: absolute also makes the element's position fixed, but relative to its ancestor element/s instead of the screen.*

### Step 4 : (Absolute)

- Add in html ```<div class="notice">Notice!</div>``` and include the css below:

```css
.notice {
    position: absolute;
    top: 60px;
    left: 400px;
    background: orange;
    padding: 10px;
    z-index: 2;
}
```

- Give .content a z-index: 1.

- Guided Question: Why does the notice appear on top of the content? What happens if you swap the z‑index values?
  - *Answer: Notice appears on top of the content due to having a greater z-index. If the z-values were swapped, then content appears above notice.*

- Challenge: 
    * What changes that you have to do on the code that will position .notice box on the top right corner of the .content box? Please write the code on paper as well (both html and css on the part of .notice and .content).
     - HTML
     ```
     <div class="content">Main Content
          <div class="notice"> Notice! </div>
      </div>
     ```

     - CSS
     ```
     .content {
        background: lightyellow;
        width: 300px;
        height: 200px;
        position: fixed;
        top: 66px;
        left: 400px;
        z-index: 1;
      } 
            
    .notice {
        position: absolute;
        top: 0;
        background: orange;
        padding: 10px;
        z-index: 2;
      }
     ```
    * Try to change the position of .content to relative then to fixed. What do you observed each time?
      - *Answer: The position of the content box changes from its initial position of beside the sidebar to somehwere way lower, nearer to the footer*
    * What do you observe on about the effect of z-index on .notice and .content boxes?
      - *Answer: If a  box had the z-index 2, they will be the one that overlaps the other and is visible. In my opinion, z-index is like the layer number of an element.*

3. Please answer the following reflection questions (15 minutes)

    a. Could you summarize the differences between the CSS position values (static, relative, absolute, fixed)? 
     - ***static:** the default position of an element; it is based on the natural flow/position of the elements in the html*
     - ***relative:** an element's position relative/based on its static position*
     - ***absolute:** position relative to the closest ancestor/parent element*
     - ***fixed:** the position of an element relative to the screen/viewport*

    b. How does absolute positioning depend on its parent element?
     - *Answer: Absolute positioning is similar to relative positioning in the sense that the position the properties are being based off is the parent element. For example, top, right, bottom, and left properties of the element would refer to the to top, right, bottom, and left of the parent element.*

    c. How do you differentiate sticky from fixed (you can research on sticky)?
     - *Answer: Sticky acts like relative positioning until the user scrolls away from its parent element and it becomes more like fixed. Additionally, it affects the flow of all the elements, unlike fixed positioning*

    d. If you were designing a webpage for a school event, how might you use positioning to highlight important information? Please give concrete examples.
      - *Should a navbar be needed, i will used fixed positioning, so that the users can always see it by the top of their screen where ever they scroll.*
      - *Sticky positioning may be used, for let's say, a small popup of team rankings for an event (HumFest, Foundation Day, or YMSAT) that the users can see at the side of their screen as they scroll through the webpage that is detailing the guidelines for the competitions.*
      - *For teasers for either the ALAB or School Fair, there can be a puzzle or mini game wherein when a button or element is clicked, it's position changes relative to its original position (there will be three to five different rules for this), and then the user has to look for them all around the webpage*
