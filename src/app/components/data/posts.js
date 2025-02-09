const posts = [
  {
    id: "p1q2r3s4t5u6v7w8x9y0",
    picture_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWUinnrT0zRtL7HBpSbV-z1zNVPFZ7KVlKrg&s",
    user_id: "b2c3d4e5f6g7h8i9j0a1",
    post_text: "That's my new post!",
    created_at: new Date("2025-01-10T14:30:00Z").toISOString(),
    likes: ["a1b2c3d4e5f6g7h8i9j0", "c3d4e5f6g7h8i9j0a1b2"], // Users who liked the post
    saved_by: ["e5f6g7h8i9j0a1b2c3d4"], // Users who saved the post
    comments: [
      {
        user_id: "a1b2c3d4e5f6g7h8i9j0",
        created_at: new Date("2025-01-10T15:00:00Z").toISOString(),
        text: "Awesome post!"
      },
      {
        user_id: "c3d4e5f6g7h8i9j0a1b2",
        created_at: new Date("2025-01-10T16:00:00Z").toISOString(),
        text: "Looks great!"
      }
    ]
  },
  {
    id: "p2q3r4s5t6u7v8w9x0y1",
    picture_url: "https://cdn.britannica.com/64/190464-050-B74E1FD9/view-central-business-district-Melbourne-train-station.jpg",
    user_id: "c3d4e5f6g7h8i9j0a1b2",
    post_text: "Exploring the world 🌍!",
    created_at: new Date("2025-01-15T12:00:00Z").toISOString(),
    likes: ["d4e5f6g7h8i9j0a1b2c3"],
    saved_by: [],
    comments: [
      {
        user_id: "d4e5f6g7h8i9j0a1b2c3",
        created_at: new Date("2025-01-15T13:45:00Z").toISOString(),
        text: "Wow, where is this?"
      }
    ]
  },
  {
    id: "p3q4r5s6t7u8v9w0x1y2",
    picture_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTdXFx5aL5U1Ve3oQAte57RwLA9FWyv8P9RQ&s",
    user_id: "d4e5f6g7h8i9j0a1b2c3",
    post_text: "Chilling at home 🏡",
    created_at: new Date("2025-02-01T10:20:00Z").toISOString(),
    likes: [],
    saved_by: ["a1b2c3d4e5f6g7h8i9j0"],
    comments: []
  },
  {
    id: "p4q5r6s7t8u9v0w1x2y3",
    picture_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHw_cDOmu8H_tuqSYHh-yRN7y4bTXi035NsYVwy4NK8E7rQ6MGTotKdefL8dLg8FTW1vU&usqp=CAU",
    user_id: "e5f6g7h8i9j0a1b2c3d4",
    post_text: "Throwback to the best trip ever! ✈️",
    created_at: new Date("2025-02-05T08:00:00Z").toISOString(),
    likes: ["b2c3d4e5f6g7h8i9j0a1", "a1b2c3d4e5f6g7h8i9j0"],
    saved_by: ["c3d4e5f6g7h8i9j0a1b2"],
    comments: [
      {
        user_id: "b2c3d4e5f6g7h8i9j0a1",
        created_at: new Date("2025-02-05T09:30:00Z").toISOString(),
        text: "That place looks amazing!"
      },
      {
        user_id: "a1b2c3d4e5f6g7h8i9j0",
        created_at: new Date("2025-02-05T10:00:00Z").toISOString(),
        text: "Miss this trip so much!"
      }
    ]
  },
  
  {
    id: "p4q5r6s7t8u9v0w1x4y3",
    picture_url: "https://www.exploretravel.com.au/images/transform/v1/crop/frm/JbL8dJ5dh2XzNFST9PPkaJ/b90ba717-6d0e-473e-a326-85417c756efe.jpg/r0_0_6000_3227_w1200_h678_fmax.jpg",
    user_id: "e5f6g7h8i9j0a1b2c3d4",
    post_text: "Throwback to the worst trip ever! ✈️",
    created_at: new Date("2025-02-01T08:00:00Z").toISOString(),
    likes: ["a1b2c3d4e5f6g7h8i9j0"],
    saved_by: [],
    comments: [
      {
        user_id: "d4e5f6g7h8i9j0a1b2c3",
        created_at: new Date("2025-01-16T13:45:00Z").toISOString(),
        text: "Eww, where is this?"
      }
    ]
  }
];

export default posts;