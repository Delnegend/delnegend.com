<template>
	<div class="flex flex-col gap-4 text-balance">
		<h2>Part 1: The Old Problem - Managing the Computer's Desk</h2>

		<p>
			Think of a computer's memory as a work desk. When a program runs, it
			needs space on the desk to put its tools and papers (data).
		</p>

		<p>
			For decades, popular programming languages like
			<b>C and C++</b> worked like this: the programmer had to tell the
			program, "I need exactly this much desk space." When they were done,
			they had to remember to say, "Okay, I'm finished with this space,
			you can clean it up."
		</p>

		<p>
			This was fast, but dangerous. If the programmer made a
			mistake—forgot to clean up, or cleaned up something that was still
			being used—the desk would get corrupted. This would cause the
			program to crash or, even worse, create security holes that hackers
			could attack.
		</p>

		<div class="border-b-4 border-double" />

		<h2>Part 2: An Easier, but Slower, Solution</h2>

		<p>
			To fix this, newer languages like <b>Java</b> and <b>C#</b> came
			along. They gave every program a "manager" (called a runtime).
		</p>

		<p>
			The programmer could just say, "Hey manager, I need some desk
			space," and the manager would find it. When the programmer was done,
			the manager would notice and automatically clean it up. This was
			much safer and easier!<br />
		</p>

		<p>
			But there was a new problem: having a manager constantly looking
			over your shoulder slows you down. For apps that need to be
			incredibly fast (like video games or the core engines of Google
			Search), this slowdown was a big deal.
		</p>

		<div class="border-b-4 border-double" />

		<h2>Part 3: The Modern Solutions - Fast AND Safe</h2>

		<p>
			This brings us to <b>Rust</b> and <b>Go</b> (Golang). They are two
			modern languages that try to give us the best of both worlds: the
			speed of the old way and the safety of the new way.
		</p>

		<p>
			<b>Rust's Approach: The Super Strict Planner</b>
		</p>
		<p>
			Rust solves the problem by being extremely strict with the
			programmer before the program is even built. It’s like having a
			master architect who inspects your building blueprints.
		</p>
		<p>
			This "architect" (called a compiler) has a set of rules. It checks
			your code to guarantee, with 100% certainty, that you will never
			make a desk-space mess. It's a lot of work to satisfy the strict
			architect, so Rust can be harder to work with. But once your plan is
			approved, your program runs at maximum speed, without needing a slow
			"manager" and with extreme safety.
		</p>

		<p><b>Go's Approach: The Efficient, Part-Time Cleaner</b></p>

		<p>
			Go solves the problem with a compromise. Instead of a full-time
			"manager," it builds a very fast, efficient "cleaning robot" (called
			a garbage collector) directly into the final program.
		</p>
		<p>
			This robot periodically takes a tiny, millisecond pause to quickly
			clean up any desk space that's no longer being used. This pause is
			so small you barely notice it, so the program is still extremely
			fast—much faster than having a full-time manager, but not quite as
			fast as Rust's "perfect blueprint" approach. In return, Go is much
			simpler and easier to work with.
		</p>

		<div class="border-b-4 border-double" />

		<h2>Part 4: The Trade-Off and The Lingo</h2>

		<p>So, programmers have a choice:</p>

		<p>
			<b>Rust</b>: Choose for absolute maximum performance and safety.
			It's like building a Formula 1 race car—it takes more effort and
			expertise, but the result is the fastest and most precise machine
			possible.
		</p>

		<p>
			<b>Go</b>: Choose when you need something that is incredibly fast,
			simple to write, and easy to manage. It's like a high-performance
			electric sports car—it's blisteringly fast for almost every need and
			much easier to get up and running.
		</p>

		<div class="border-b-4 border-double" />

		<h2>Finally, the slang:</h2>

		<p>
			A person who programs in Rust is called a Rustacean (like
			"crustacean," a nod to its crab mascot).
		</p>

		<p>
			A person who programs in Go is called a Gopher (named after its
			gopher mascot).
		</p>
	</div>
</template>

<style scoped>
p {
	font-size: var(--text-lg);
}
h2 {
	font-size: var(--text-xl);
	font-weight: var(--font-weight-semibold);
}
</style>
