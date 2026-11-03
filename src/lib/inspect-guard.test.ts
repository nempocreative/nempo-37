import { describe, expect, it } from "vitest";
import {
  isInspectGuardDisabled,
  shouldBlockContextMenu,
  shouldBlockInspectKey,
} from "./inspect-guard";

const none = { ctrlKey: false, metaKey: false, shiftKey: false };
const ctrl = { ctrlKey: true, metaKey: false, shiftKey: false };
const ctrlShift = { ctrlKey: true, metaKey: false, shiftKey: true };

describe("inspect guard", () => {
  it("blocks DevTools, view-source and save-page shortcuts", () => {
    expect(shouldBlockInspectKey("F12", none)).toBe(true);
    expect(shouldBlockInspectKey("I", ctrlShift)).toBe(true);
    expect(shouldBlockInspectKey("J", ctrlShift)).toBe(true);
    expect(shouldBlockInspectKey("C", ctrlShift)).toBe(true);
    expect(shouldBlockInspectKey("u", ctrl)).toBe(true);
    expect(shouldBlockInspectKey("S", ctrl)).toBe(true);
  });

  it("leaves normal typing and ordinary shortcuts alone", () => {
    expect(shouldBlockInspectKey("u", none)).toBe(false);
    expect(shouldBlockInspectKey("i", ctrl)).toBe(false);
    expect(shouldBlockInspectKey("F5", none)).toBe(false);
    expect(shouldBlockInspectKey("r", ctrlShift)).toBe(false);
    expect(shouldBlockInspectKey("a", ctrl)).toBe(false);
  });

  it("keeps the native menu inside editing fields only", () => {
    const field = document.createElement("input");
    const note = document.createElement("textarea");
    const content = document.createElement("div");
    content.setAttribute("contenteditable", "true");
    const photo = document.createElement("img");
    const page = document.createElement("section");
    page.appendChild(photo);

    expect(shouldBlockContextMenu(field)).toBe(false);
    expect(shouldBlockContextMenu(note)).toBe(false);
    expect(shouldBlockContextMenu(content)).toBe(false);
    expect(shouldBlockContextMenu(photo)).toBe(true);
    expect(shouldBlockContextMenu(page)).toBe(true);
    expect(shouldBlockContextMenu(null)).toBe(true);
  });

  it("stays off in Lovable preview and local dev, on in production", () => {
    expect(isInspectGuardDisabled("id-preview--abc.lovable.app")).toBe(true);
    expect(isInspectGuardDisabled("lovable.dev")).toBe(true);
    expect(isInspectGuardDisabled("localhost")).toBe(true);
    expect(isInspectGuardDisabled("nempogarut.com")).toBe(false);
    expect(isInspectGuardDisabled("www.nempogarut.com")).toBe(false);
    expect(isInspectGuardDisabled("my-app.vercel.app")).toBe(false);
  });
});
