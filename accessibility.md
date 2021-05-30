# Web accessibility


- **Ensure web pages are accessible to everyone**
  > "The power of the Web is in its universality. Access by everyone regardless of disability is an essential aspect." - Tim Berners-Lee
- **Surf web with more than a browser**
  - **screen readers** for users with vision impairments
  - **zoom**
- **Ensure accessibility with developer tools**
  - **Contrast checkers** for color-blind users
  - Tools to generate appropriate colors and test site to ensure compliance:
    - **Palette generation tools**:
      - [Adobe Color](https://color.adobe.com/create/color-accessibility), an interactive tool for testing color combinations
      - [Color Safe](http://colorsafe.co/), a tool for generating text colors based on a selected background color
    - **Compliance checkers**:
      - Browser extensions to test a page:
        - [Edge: WCAG Color contrast checker](https://microsoftedge.microsoft.com/addons/detail/wcag-color-contrast-check/idahaggnlnekelhgplklhfpchbfdmkjp)
        - [Firefox: WCAG Contrast checker](https://addons.mozilla.org/firefox/addon/wcag-contrast-checker/)
        - [Chrome: Colour Contrast Checker](https://chrome.google.com/webstore/detail/colour-contrast-checker/nmmjeclfkgjdomacpcflgdkgpphpmnfe)
      - Applications:
        - [Colour Contrast Analyser (CCA)](https://www.tpgi.com/color-contrast-checker/)
  - **Lighthouse** a tool that for analyzing websites
- **Ensure links and images are accessible**
  - **Link text** provides a few words to describe where the link will take the user
    - Accessible Rich Internet Applications (**ARIA**) attributes provides context to a screen reader when creating custom controls that don't exist natively in HTML
  - **Alt text for images**
    - search engines can't understand what's in an image, they rely on alt text
    - images that have no meaning should have their alt attribute set to an empty string: `alt=""`, so that screen readers prevent them from announcing
- **Design for accessibility**
  - **Use HTML the way it was designed**
    - HTML headers, `<h1>` through `<h6>`
    - use `<a>` for hyperlink, and use `<button>` for a button
    - use button to add a control that the user selects to perform an action
  - **Use good visual cues**
  - **Consider the keyboard**
    - present content in logical order so a keyboard user can access each element as they move down using tab
    - [WebAIM](https://webaim.org/techniques/keyboard/)
