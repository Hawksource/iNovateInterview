import { render, screen } from "@testing-library/react";
import App from "../App.tsx";

test("renders hello", () => {
    render(<App />);
    expect(screen.getByText(/Combined/i)).toBeInTheDocument();
});
