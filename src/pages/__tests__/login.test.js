import {render, screen} from "@testing-library/react";
import {Login} from "../login";

describe("Login", () => {
  it("should render without crashing", () => {
    render(<Login />);
    expect(screen.getByText("Ir para a home")).toBeTruthy();
  });
});
