package com.vaadin.polymer.demo.client.views;

import com.google.gwt.core.client.JavaScriptObject;
import com.google.gwt.core.shared.GWT;
import com.google.gwt.dom.client.DivElement;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.ui.Composite;
import com.vaadin.polymer.Polymer;
import com.vaadin.polymer.paper.PaperButtonElement;
import com.vaadin.polymer.paper.PaperInputElement;
import com.vaadin.polymer.paper.PaperTextareaElement;
import com.vaadin.polymer.vaadin.VaadinDatePickerElement;
import com.vaadin.polymer.vaadin.VaadinGridElement;
import com.vaadin.polymer.vaadin.VaadinPouchdbElement;

import elemental2.core.Array;
import elemental2.dom.HTMLDivElement;
import elemental2.dom.HTMLFormElement;
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

  public final HTMLDivElement element;
  interface View3UiBinder extends UiBinder<DivElement, View3> {}
  private static View3UiBinder viewUi = GWT.create(View3UiBinder.class);

  @UiField PaperButtonElement submit;
  @UiField PaperInputElement title;
  @UiField PaperTextareaElement descr;
  @UiField VaadinDatePickerElement date;
  @UiField VaadinGridElement grid;
  @UiField HTMLFormElement form;
  @UiField VaadinPouchdbElement pouchdb;

  public View3() {
    element = Js.cast(viewUi.createAndBindUi(this));
    pouchdb.addEventListener("pouchdb-connect", e -> {
      Array<?> arr = pouchdb.getData();
      if (arr == null) {
        // TODO: a better e2 way
        arr = Js.cast(JavaScriptObject.createArray());
        pouchdb.setData(arr);
      }
      grid.setItems(arr);
    });
    
    submit.addEventListener("click", e -> {
      if (date.getValue().isEmpty()) {
        date.setInvalid(date.getValue().isEmpty());
        return;
      }

      if (title.validate() && descr.validate()) {
        Todo todo = new Todo();
        todo.date = date.getValue();
        todo.title = title.getValue();
        todo.description = descr.getValue();
        
        Polymer.apply(grid, "push", "items", todo);
        Polymer.apply(pouchdb, "push", "data", todo);

        date.setValue("");
        title.setValue("");
        descr.setValue("");
      }
      
    });
  }

}
