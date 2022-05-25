import ship from "./ship";

test("ship", () => {
 let myship = ship(5);
 myship.hit(1);
 myship.hit(2);
 myship.hit(3);
 myship.hit(4);
 myship.hit(5);
 expect(myship.isSunk() == true);
});
