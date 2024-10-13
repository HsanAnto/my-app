import { render, screen, fireEvent } from "@testing-library/react";
import Like from "../like";

describe("Like Component", () => {
  test("displays the initial number of likes as 'Likes: 0'", () => {
    render(<Like />);
    expect(screen.getByText("Likes: 0")).toBeInTheDocument();
  });

  test("increments the number of likes when 'Like' button is clicked", () => {
    render(<Like />);
    const likeButton = screen.getByText("Like");
    fireEvent.click(likeButton);
    expect(screen.getByText("Likes: 1")).toBeInTheDocument();
  });

  test("decrements the number of likes when 'Dislike' button is clicked", () => {
    render(<Like />);
    fireEvent.click(screen.getByText("Like"));
    const dislikeButton = screen.getByText("Dislike");
    fireEvent.click(dislikeButton);
    expect(screen.getByText("Likes: 0")).toBeInTheDocument();
  });
});
