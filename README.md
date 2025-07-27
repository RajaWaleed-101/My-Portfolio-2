# 3D Portfolio Website

A modern, interactive 3D portfolio website built with HTML, CSS, and JavaScript featuring Three.js for 3D elements. This single-page portfolio includes sections for graphic design work, website projects, video editing projects, services, and contact information with a map API integration.

## Features

- Interactive 3D background with floating geometric shapes
- Dark theme with modern UI design
- Responsive layout for all devices
- Horizontal scrolling galleries for projects
- Modal popups for project details
- Interactive Google Maps integration for location
- Contact form
- Smooth scrolling and animations

## Setup Instructions

1. **Replace Placeholder Images**
   - Add your graphic design work images to the `/images` folder
   - Name them according to the pattern in the placeholder.txt file
   - Recommended size: 800x600px or similar aspect ratio

2. **Replace Placeholder Videos**
   - Add your video editing project files to the `/videos` folder
   - Name them according to the pattern in the placeholder.txt file
   - Create thumbnails for videos and place them in the `/images` folder

3. **Update Project Data**
   - Open `script.js` and locate the project data arrays:
     - `graphicDesignProjects`
     - `websiteProjects`
     - `videoProjects`
   - Replace the sample data with your own project information

4. **Google Maps API Key**
   - Get a Google Maps API key from the [Google Cloud Platform Console](https://console.cloud.google.com/)
   - Replace `YOUR_API_KEY` in the index.html file with your actual API key
   - Update the coordinates in the `initMap()` function in script.js if needed

5. **Customize Content**
   - Update the services section with your actual services
   - Modify the contact information with your details
   - Customize colors in the CSS variables if desired

## Customization Options

### Changing Colors

To change the color scheme, edit the CSS variables at the top of the `styles.css` file:

```css
:root {
    --dark-bg: #0f0f0f;
    --darker-bg: #080808;
    --accent-color: #7b68ee; /* Purple accent */
    --text-color: #f0f0f0;
    --secondary-text: #a0a0a0;
    --card-bg: rgba(30, 30, 30, 0.7);
    --card-hover: rgba(40, 40, 40, 0.9);
}
```

### Modifying 3D Elements

To change the 3D background elements, edit the `initThreeJS()` function in `script.js`. You can:

- Modify the shapes by changing the geometry types
- Change colors of the shapes
- Adjust the number and size of stars
- Modify animation speeds and behaviors

### Adding New Sections

To add a new section:

1. Add a new section element in `index.html` following the existing pattern
2. Add corresponding styles in `styles.css`
3. If needed, add new JavaScript functionality in `script.js`

## Browser Compatibility

This portfolio is compatible with modern browsers that support WebGL:
- Chrome (recommended)
- Firefox
- Safari
- Edge

## Credits

- [Three.js](https://threejs.org/) for 3D graphics
- [Font Awesome](https://fontawesome.com/) for icons
- [Google Maps API](https://developers.google.com/maps) for location map

## License

Feel free to use this template for your personal portfolio. Attribution is appreciated but not required.