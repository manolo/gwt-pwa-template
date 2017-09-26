package com.vaadin.polymer.demo.client.views;

import com.google.gwt.core.shared.GWT;
import com.google.gwt.dom.client.Element;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.vaadin.polymer.Polymer;
import com.vaadin.polymer.iron.IronAjaxElement;
import com.vaadin.polymer.iron.IronListElement;
import com.vaadin.polymer.paper.PaperProgressElement;

import elemental2.core.Array;
import elemental2.dom.HTMLDivElement;
import jsinterop.base.Js;

public class View2 {

  public final HTMLDivElement element;
  interface View2UiBinder extends UiBinder<Element, View2> {}
  private static View2UiBinder viewUi = GWT.create(View2UiBinder.class);

  @UiField IronListElement list;
  @UiField IronAjaxElement ajax;
  @UiField PaperProgressElement progress;

  public View2() {
    element = Js.cast(viewUi.createAndBindUi(this));
    
    ajax.addEventListener("response", e -> {
      list.setItems(Polymer.<Array<?>>property(ajax.getLastResponse(), "items"));
      progress.style.display = "none";
    });
  }

}
