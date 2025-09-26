function loadTemplate(templateId, targetId) {
          const template = document.getElementById(templateId).content;
          const target = document.getElementById(targetId);
          if (template && target) {
            target.appendChild(document.importNode(template, true));
          }
        }
    
        document.addEventListener('DOMContentLoaded', () => {
          loadTemplate('header-template', 'header');
          loadTemplate('main-content-template', 'main-content');
          loadTemplate('footer-template', 'footer');
        });