function toggleSectionLinks() {
  const sectionLinks = document.getElementById('sectionLinks');
  sectionLinks.className = sectionLinks.className === 'hiddenSectionLinks'
    ? ''
    : 'hiddenSectionLinks';
}
