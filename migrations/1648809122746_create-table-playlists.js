exports.up = (pgm) => {
  pgm.createTable("playlists", {
    id: {
      type: "VARCHAR(50)",
      primaryKey: true,
    },
    name: {
      type: "VARCHAR(50)",
      unique: true,
      notNull: true,
    },
    owner: {
      type: "VARCHAR(50)",
      notNull: true,
    },
  });
  // pgm.addConstraint("playlists", "unique_owner", "UNIQUE(owner)");

  pgm.addConstraint(
    "playlists",
    "fk_playlists.owner_users.id",
    "FOREIGN KEY(owner) REFERENCES users(id) ON DELETE CASCADE"
  );
};

exports.down = (pgm) => {
  pgm.dropTable("playlists");
};
