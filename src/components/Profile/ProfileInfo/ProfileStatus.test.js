import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
    test("status from props should be in the state", () => {
        const component = create(<ProfileStatus status="Hello World!" />);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("Hello World!");
    });
    test("span with status should be displayed after creation", () => {
        const component = create(<ProfileStatus status="Hello World!" />);
        const root = component.root;
        let span = root.findByType("span");
        expect(span.length).toBe(1);
    });
});