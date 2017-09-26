package com.vaadin.polymer.demo.client;

import java.util.Arrays;

import com.google.gwt.core.client.EntryPoint;
import com.google.gwt.core.shared.GWT;
import com.google.gwt.dom.client.DivElement;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.vaadin.polymer.Polymer;
import com.vaadin.polymer.app.AppDrawerElement;
import com.vaadin.polymer.demo.client.views.View1;
import com.vaadin.polymer.demo.client.views.View2;
import com.vaadin.polymer.demo.client.views.View3;
import com.vaadin.polymer.paper.PaperBadgeElement;
import com.vaadin.polymer.paper.PaperListboxElement;

import elemental2.dom.DomGlobal;
import elemental2.dom.HTMLDivElement;
import elemental2.dom.HTMLElement;
import jsinterop.base.Js;

public class Shell implements EntryPoint {
  
  public HTMLDivElement element;
  interface ShellWidgetsUiBinder extends UiBinder<DivElement, Shell> {}
  private static ShellWidgetsUiBinder shellUi = GWT.create(ShellWidgetsUiBinder.class);

  @UiField PaperListboxElement menu;
  @UiField HTMLDivElement content;
  @UiField AppDrawerElement drawer;
  @UiField PaperBadgeElement offline;

  private HTMLElement[] views = new HTMLElement[3];
  
  @Override
  public void onModuleLoad() {
    // Initialize the UI
    element = Js.cast(shellUi.createAndBindUi(this));

    // Listen for network changes
    NetworkStatus.onChange(o -> offline.style.display = NetworkStatus.isOnLine() ? "none" : "block");
    offline.style.display = NetworkStatus.isOnLine() ? "none" : "block";

    // Import all app components
    Polymer.importHref(Arrays.asList(
        "paper-styles",
        "iron-icons",
        "app-layout/app-drawer-layout/app-drawer-layout",
        "app-layout/app-drawer/app-drawer",
        "app-layout/app-header-layout/app-header-layout",
        "app-layout/app-header/app-header",
        "app-layout/app-toolbar/app-toolbar",
        "paper-listbox",
        "paper-item",
        "paper-icon-button",
        "iron-ajax",
        "iron-list",
        "vaadin-grid",
        "paper-progress",
        "paper-material",
        "vaadin-date-picker",
        "paper-input",
        "paper-input/paper-textarea",
        "paper-button",
        "vaadin-pouchdb"
        ), o -> {

      // Attach the Ui.
      DomGlobal.document.body.appendChild(element);

      return 0;
    });
    
    menu.addEventListener("iron-select", e -> {
      
      if (!drawer.getPersistent()) {
        drawer.close();
      }

      int idx = Integer.parseInt(menu.getSelected().toString());
      content.innerHTML = "";
      content.appendChild(getView(idx));
    });
  }


  // Lazy creation of views
  private HTMLElement getView(int idx) {
    return views[idx] = views[idx] == null ? createView(idx) : views[idx];
  }

  // Define here all your views
  private HTMLElement createView(int idx) {
    switch (idx) {
      case 0: return new View1().element;
      case 1: return new View2().element;
      case 2: return new View3().element;
      default: return null;
    }
  }
}
