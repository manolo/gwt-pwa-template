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
import com.vaadin.polymer.paper.widget.PaperToast;
import com.vaadin.polymer.vaadin.widget.VaadinDatePicker;
import com.vaadin.polymer.vaadin.widget.VaadinGrid;

import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;

public class View3 extends Composite {

  @JsType(isNative = true)
  public interface Todo {
    @JsProperty String getDate();
    @JsProperty String getTitle();
    @JsProperty String getDescription();
    @JsProperty void setDate(String d);
    @JsProperty void setTitle(String d);
    @JsProperty void setDescription(String d);
  }

  interface View3UiBinder extends UiBinder<HTMLPanel, View3> {
  }

  private static View3UiBinder viewUi = GWT.create(View3UiBinder.class);

  @UiField PaperButton submit;
  @UiField PaperInput title;
  @UiField PaperTextarea descr;
  @UiField VaadinDatePicker date;
  @UiField PaperToast toast;
  @UiField VaadinGrid grid;
  @UiField FormElement form;

  public View3() {
    initWidget(viewUi.createAndBindUi(this));
    toast.setFitInto(this.getElement());
    grid.setItems(JavaScriptObject.createArray());
  }

  @UiHandler("submit")
  void onClick(ClickEvent e) {
    if (date.getValue().isEmpty()) {
      date.setInvalid(date.getValue().isEmpty());
      return;
    }

    if (title.validate() && descr.validate()) {
      Todo todo = (Todo) JavaScriptObject.createObject();
      todo.setDate(date.getValue());
      todo.setTitle(title.getValue());
      todo.setDescription(descr.getValue());
      Polymer.apply(grid.getElement(), "push", "items", todo);
      form.reset();
    }
  }

}
