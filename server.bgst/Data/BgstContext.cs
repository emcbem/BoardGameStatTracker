using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace server.bgst.Data;

public partial class BgstContext : DbContext
{
#pragma warning disable CS8618 // Non-nullable field must contain a non-null value when exiting constructor. Consider adding the 'required' modifier or declaring as nullable.
    public BgstContext()
#pragma warning restore CS8618 // Non-nullable field must contain a non-null value when exiting constructor. Consider adding the 'required' modifier or declaring as nullable.
    {
    }

#pragma warning disable CS8618 // Non-nullable field must contain a non-null value when exiting constructor. Consider adding the 'required' modifier or declaring as nullable.
    public BgstContext(DbContextOptions<BgstContext> options)
#pragma warning restore CS8618 // Non-nullable field must contain a non-null value when exiting constructor. Consider adding the 'required' modifier or declaring as nullable.
        : base(options)
    {
    }

    public virtual DbSet<BgstUser> BgstUsers { get; set; }

    public virtual DbSet<BoardGame> BoardGames { get; set; }

    public virtual DbSet<Collection> Collections { get; set; }

    public virtual DbSet<Friend> Friends { get; set; }

    public virtual DbSet<FriendRequest> FriendRequests { get; set; }

    public virtual DbSet<PlayedGame> PlayedGames { get; set; }

    public virtual DbSet<UserPlayedGame> UserPlayedGames { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<BgstUser>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("bgst_user_pkey");

            entity.ToTable("bgst_user", "bgst");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Email).HasColumnName("email");
            entity.Property(e => e.Friendcode).HasColumnName("friendcode");
            entity.Property(e => e.Imageurl).HasColumnName("imageurl");
            entity.Property(e => e.Username).HasColumnName("username");
        });

        modelBuilder.Entity<BoardGame>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("board_game_pkey");

            entity.ToTable("board_game", "bgst");

            entity.Property(e => e.Id).HasColumnName("id");
			entity.Property(e => e.MaxEstimatedPlayTimeMinutes).HasColumnName("max_estimated_play_time_minutes");
            entity.Property(e => e.YearPublished).HasColumnName("year_published");
			entity.Property(e => e.Description).HasColumnName("description");
			entity.Property(e => e.Age).HasColumnName("age");

			entity.Property(e => e.MinEstimatedPlayTimeMinutes).HasColumnName("min_estimated_play_time_minutes");
			entity.Property(e => e.ImageUrl).HasColumnName("image_url");
            entity.Property(e => e.MaxPlayers).HasColumnName("max_players");
            entity.Property(e => e.MinPlayers).HasColumnName("min_players");
            entity.Property(e => e.Title).HasColumnName("title");
        });

        modelBuilder.Entity<Collection>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("collection_pkey");

            entity.ToTable("collection", "bgst");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.BgstUserId).HasColumnName("bgst_user_id");
            entity.Property(e => e.BoardGameId).HasColumnName("board_game_id");
            entity.Property(e => e.DateAdded).HasColumnName("date_added");

            entity.HasOne(d => d.BgstUser).WithMany(p => p.Collections)
                .HasForeignKey(d => d.BgstUserId)
                .OnDelete(DeleteBehavior.Cascade)
                .HasConstraintName("collection_bgst_user_id_fkey");

            entity.HasOne(d => d.BoardGame).WithMany(p => p.Collections)
                .HasForeignKey(d => d.BoardGameId)
                .OnDelete(DeleteBehavior.Cascade)
                .HasConstraintName("collection_board_game_id_fkey");
        });

        modelBuilder.Entity<Friend>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("friend_pkey");

            entity.ToTable("friend", "bgst");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.BgstUser1Id).HasColumnName("bgst_user_1_id");
            entity.Property(e => e.BgstUser2Id).HasColumnName("bgst_user_2_id");
            entity.Property(e => e.DateAccepted).HasColumnName("date_accepted");

            entity.HasOne(d => d.BgstUser1).WithMany(p => p.FriendBgstUser1s)
                .HasForeignKey(d => d.BgstUser1Id)
                .OnDelete(DeleteBehavior.Cascade)
                .HasConstraintName("friend_bgst_user_1_id_fkey");

            entity.HasOne(d => d.BgstUser2).WithMany(p => p.FriendBgstUser2s)
                .HasForeignKey(d => d.BgstUser2Id)
                .OnDelete(DeleteBehavior.Cascade)
                .HasConstraintName("friend_bgst_user_2_id_fkey");
        });

        modelBuilder.Entity<FriendRequest>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("friend_request_pkey");

            entity.ToTable("friend_request", "bgst");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.BgstUser1Id).HasColumnName("bgst_user_1_id");
            entity.Property(e => e.BgstUser2Id).HasColumnName("bgst_user_2_id");
            entity.Property(e => e.DateSent).HasColumnName("date_sent");

            entity.HasOne(d => d.BgstUser1).WithMany(p => p.FriendRequestBgstUser1s)
                .HasForeignKey(d => d.BgstUser1Id)
                .OnDelete(DeleteBehavior.Cascade)
                .HasConstraintName("friend_request_bgst_user_1_id_fkey");

            entity.HasOne(d => d.BgstUser2).WithMany(p => p.FriendRequestBgstUser2s)
                .HasForeignKey(d => d.BgstUser2Id)
                .OnDelete(DeleteBehavior.Cascade)
                .HasConstraintName("friend_request_bgst_user_2_id_fkey");
        });

        modelBuilder.Entity<PlayedGame>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("played_game_pkey");

            entity.ToTable("played_game", "bgst");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.BoardGameId).HasColumnName("board_game_id");
            entity.Property(e => e.DatePlayed).HasColumnName("date_played");
            entity.Property(e => e.TimeElapsedMinutes).HasColumnName("time_elapsed_minutes");

            entity.HasOne(d => d.BoardGame).WithMany(p => p.PlayedGames)
                .HasForeignKey(d => d.BoardGameId)
                .OnDelete(DeleteBehavior.Cascade)
                .HasConstraintName("played_game_board_game_id_fkey");
        });

        modelBuilder.Entity<UserPlayedGame>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("user_played_game_pkey");

            entity.ToTable("user_played_game", "bgst");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.BgstUserId).HasColumnName("bgst_user_id");
            entity.Property(e => e.EndRank).HasColumnName("end_rank");
            entity.Property(e => e.PlayedGameId).HasColumnName("played_game_id");
            entity.Property(e => e.Points).HasColumnName("points");
            entity.Property(e => e.Username).HasColumnName("username");

            entity.HasOne(d => d.BgstUser).WithMany(p => p.UserPlayedGames)
                .HasForeignKey(d => d.BgstUserId)
                .OnDelete(DeleteBehavior.Cascade)
                .HasConstraintName("user_played_game_bgst_user_id_fkey");

            entity.HasOne(d => d.PlayedGame).WithMany(p => p.UserPlayedGames)
                .HasForeignKey(d => d.PlayedGameId)
                .OnDelete(DeleteBehavior.Cascade)
                .HasConstraintName("user_played_game_played_game_id_fkey");
        });

        base.OnModelCreating(modelBuilder);
    }

}
