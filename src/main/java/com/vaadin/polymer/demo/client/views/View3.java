package com.vaadin.polymer.demo.client.views;

import com.google.gwt.core.client.JavaScriptObject;
import com.google.gwt.core.shared.GWT;
import com.google.gwt.dom.client.FormElement;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.uibinder.client.UiHandler;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.HTMLPanel;
import com.vaadin.polymer.Polymer;
import com.vaadin.polymer.paper.widget.PaperButton;
import com.vaadin.polymer.paper.widget.PaperInput;
import com.vaadin.polymer.paper.widget.PaperTextarea;
import com.vaadin.polymer.vaadin.widget.VaadinDatePicker;
import com.vaadin.polymer.vaadin.widget.VaadinGrid;
import com.vaadin.polymer.vaadin.widget.VaadinPouchdb;
import com.vaadin.polymer.vaadin.widget.event.PouchdbConnectEvent;

import elemental2.core.Array;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;
import jsinterop.base.Js;

public class View3 extends Composite {

  @JsType(isNative = true, namespace=JsPackage.GLOBAL, name="Object")
  public static class Todo {
    @JsProperty public String date;
    @JsProperty public String title;
    @JsProperty public String description;
  }

  interface View3UiBinder extends UiBinder<HTMLPanel, View3> {
  }

  private static View3UiBinder viewUi = GWT.create(View3UiBinder.class);

  @UiField PaperButton submit;
  @UiField PaperInput title;
  @UiField PaperTextarea descr;
  @UiField VaadinDatePicker date;
  @UiField VaadinGrid grid;
  @UiField FormElement form;
  @UiField VaadinPouchdb pouchdb;

  public View3() {
    initWidget(viewUi.createAndBindUi(this));
  }

  @UiHandler("pouchdb")
  void onConnect(PouchdbConnectEvent e) {
    Array<?> arr = pouchdb.getData();
    if (arr == null) {
      // TODO: a better e2 way
      arr = Js.cast(JavaScriptObject.createArray());
      pouchdb.setData(arr);
    }
    grid.setItems(arr);
  }

  @UiHandler("submit")
  void onClick(ClickEvent e) {
    if (date.getValue().isEmpty()) {
      date.setInvalid(date.getValue().isEmpty());
      return;
    }

    if (title.validate() && descr.validate()) {
      Todo todo = new Todo();
      todo.date = date.getValue();
      todo.title = title.getValue();
      todo.description = descr.getValue();
      Polymer.apply(grid.getElement(), "push", "items", todo);
      Polymer.apply(pouchdb.getElement(), "push", "data", todo);
      form.reset();
    }
  }

}
