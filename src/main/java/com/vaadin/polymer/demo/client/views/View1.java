package com.vaadin.polymer.demo.client.views;

import com.google.gwt.core.shared.GWT;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.uibinder.client.UiHandler;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.HTMLPanel;
import com.vaadin.polymer.Polymer;
import com.vaadin.polymer.iron.widget.IronAjax;
import com.vaadin.polymer.iron.widget.event.ResponseEvent;
import com.vaadin.polymer.vaadin.Column;
import com.vaadin.polymer.vaadin.Row;
import com.vaadin.polymer.vaadin.widget.VaadinGrid;

import elemental2.dom.DomGlobal;
import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLImageElement;
import jsinterop.base.Js;

public class View1 extends Composite {

  interface View1UiBinder extends UiBinder<HTMLPanel, View1> {}

  private static View1UiBinder viewUi = GWT.create(View1UiBinder.class);

  @UiField VaadinGrid grid;
  @UiField IronAjax ajax;

  public View1() {
     initWidget(viewUi.createAndBindUi(this));

     // Image renderer
     grid.ready(o -> {
       Column column = Js.cast(grid.getColumns().getAt(0));
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
  }

  @UiHandler("ajax")
  void onResponse(ResponseEvent e) {
      grid.setItems(ajax.getLastResponse());
  }
}
