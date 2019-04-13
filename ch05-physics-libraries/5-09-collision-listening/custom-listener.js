class CustomListener {
  BeginContact(contact) {
    let f1 = contact.GetFixtureA();
    let f2 = contact.GetFixtureB();

    let b1 = f1.GetBody();
    let b2 = f2.GetBody();

    let o1 = b1.GetUserData();
    let o2 = b2.GetUserData();

    if (o1 instanceof Particle && o2 instanceof Particle) {
      o1.change();
      o2.change();
    }
  }

  EndContact(contact) {}

  PreSolve(contact, manifold) {}

  PostSolve(contact, manifold) {}
}
