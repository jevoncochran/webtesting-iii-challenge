import React from "react";
import { render } from "@testing-library/react";
import Dashboard from "./Dashboard";

// Test away
test('Dashboard renders correctly', () => {
    render(<Dashboard />);
})

test('defaults to open and unlocked', () => {
    expect(render(<Dashboard />)).toMatchSnapshot();
})