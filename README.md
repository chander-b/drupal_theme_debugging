# Drupal Twig Template Finder - Chrome Extension

This Chrome extension allows users to identify all the Twig templates used on a Drupal website by scanning the HTML for Twig template suggestions. The extension is useful for Drupal developers who need quick access to the template filenames responsible for rendering parts of the page.

## Features
- Detects and lists Twig template suggestions (e.g., `html--node.html.twig`) from a Drupal page.
- Provides easy access to templates through the Chrome extension popup.
- Useful for debugging and developing Drupal themes.

## Installation

### Method 1: Install from GitHub (Manual Installation)

1. **Download the Repository**:
   - Clone or download this repository to your local machine.
     ```bash
     git clone https://github.com/chander-b/drupal_twig_template_finder.git
     ```
   - Alternatively, you can download it as a `.zip` file and extract it.

2. **Install the Extension in Chrome**:
   - Open Chrome and go to `chrome://extensions/`.
   - Enable **Developer mode** by toggling the switch in the top right corner.
   - Click **Load unpacked** and select the folder where you cloned or extracted the extension files.
   - The extension should now appear in your Chrome toolbar.

3. **Use the Extension**:
   - Navigate to any Drupal page.
   - Click on the extension icon in your Chrome toolbar to see a list of Twig templates found on the page.

### Method 2: Download as a ZIP

1. **Download the ZIP**:
   - Click the **Download ZIP** button from the [GitHub repository](https://github.com/chander-b/drupal_twig_template_finder).

2. **Install**:
   - Follow the steps in **Method 1** to load the unpacked extension in Chrome.

## Usage

1. After installing the extension, navigate to any Drupal website where Twig debugging is enabled.
2. Click on the extension's icon in the Chrome toolbar.
3. A popup will display a list of all Twig templates detected on the page.

### Enabling Twig Debugging in Drupal

To ensure that the extension can detect Twig templates, you need to enable Twig debugging in your Drupal installation:

1. Open the `services.yml` file in your Drupal site’s configuration.
2. Set the following values:
   ```yaml
   twig.config:
     debug: true
     auto_reload: true
     cache: false
