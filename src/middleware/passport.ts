// src/middleware/passport.ts
import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import bcrypt from 'bcrypt';
import { findUserByUsername, findUserById, User } from '../models/User';

passport.use(new LocalStrategy(
  async (username, password, done) => {
    try {
      const user: User | null = await findUserByUsername(username);
      if (!user) return done(null, false, { message: 'Incorrect username' });

      const valid = await bcrypt.compare(password, user.password);
      if (!valid) return done(null, false, { message: 'Incorrect password' });

      return done(null, user);
    } catch (err) {
      return done(err);
    }
  }
));

passport.serializeUser((user: any, done) => done(null, user.id));

passport.deserializeUser(async (id: number, done) => {
  try {
    const user = await findUserById(id);
    if (user) done(null, user);
    else done(null, false);
  } catch (err) {
    done(err);
  }
});

export default passport;
