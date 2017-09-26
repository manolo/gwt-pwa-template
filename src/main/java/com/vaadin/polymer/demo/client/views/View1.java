package com.vaadin.polymer.demo.client.views;

import com.google.gwt.core.shared.GWT;
import com.google.gwt.dom.client.Element;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.ui.Composite;
import com.vaadin.polymer.Polymer;
import com.vaadin.polymer.iron.IronAjaxElement;
import com.vaadin.polymer.vaadin.Column;
import com.vaadin.polymer.vaadin.Row;
import com.vaadin.polymer.vaadin.VaadinGridElement;

import elemental2.dom.DomGlobal;
import elemental2.dom.HTMLDivElement;
import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLImageElement;
import jsinterop.base.Js;

public class View1 extends Composite {

  public final HTMLDivElement element;
  interface View1UiBinder extends UiBinder<Element, View1> {}
  private static View1UiBinder viewUi = GWT.create(View1UiBinder.class);

  @UiField VaadinGridElement grid;
  @UiField IronAjaxElement ajax;

  public View1() {
     element = Js.cast(viewUi.createAndBindUi(this));

     grid.then(o -> {
       Column column = Js.cast(grid.getColumns().getAt(0));
       // Image renderer
       column.setRenderer(row -> {
           Row r = (Row)row;
           HTMLElement e = r.getElement();
           HTMLImageElement img = Js.cast(e.firstChild);
           if (img == null) {
             img = Js.cast(DomGlobal.document.createElement("img"));
             e.appendChild(img);
           }
           img.src = r.getData().toString();
           return 0;
       });

       // Send the request
       Polymer.Base.async(o2 -> ajax.generateRequest(), 1000);
       return 0;
     });
     
     ajax.addEventListener("response", e -> grid.setItems(ajax.getLastResponse()));
  }
}
