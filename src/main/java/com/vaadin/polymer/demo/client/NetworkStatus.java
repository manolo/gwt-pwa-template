package com.vaadin.polymer.demo.client;

import elemental2.dom.DomGlobal;
import elemental2.dom.EventListener;
import elemental2.dom.HTMLElement;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsProperty;

public abstract class NetworkStatus {

  @JsProperty(namespace = "navigator")
  public static native boolean isOnLine();

  @JsProperty(namespace = JsPackage.GLOBAL)
  public static native HTMLElement getWindow();

  public static void onOffline(EventListener f) {
    DomGlobal.window.addEventListener("offline", f);
  }

  public static void onOnline(EventListener f) {
    DomGlobal.window.addEventListener("online", f);
  }

  public static void onChange(EventListener f) {
    onOnline(f);
    onOffline(f);
  }
}
