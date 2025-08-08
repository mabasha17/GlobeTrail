import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const NewUser = mutation({
  args: {
    name: v.string(),
    imageUrl: v.string(),
    email: v.string(),
    subscription: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    //if the user already exists
    const user = await ctx.db.query("userTable").filter((q) => q.eq(q.field("email"), args.email)).collect();
    if(user?.length== 0) {
        // If the user does not exist, create a new user
        return await ctx.db.insert("userTable", {
            name: args.name,
            imageUrl: args.imageUrl,
            email: args.email,
            subscription: args.subscription,
        });
    }
    return user[0];
  },
});