import type { ReactNode } from "react";
import { useEmailTheme } from "@atelic-action/ui/email";

/*
 * The handful of rows and spans the jq renderers built by hand rather
 * than through a library def. Each one is a literal port: the same element, the
 * same attributes, and the style declarations in the same order the jq wrote
 * them, because the parity check compares declarations as an ordered list.
 *
 * Nothing here belongs in the package until a second runner wants it. A piece
 * that earns a second caller graduates to @atelic-action/ui and loses its copy
 * here.
 */

/* ---------- retro ---------- */

export type RecordsRowProps = { last: boolean; children?: ReactNode };

/**
 * The card row a records table sits in: the card's own side padding with no
 * top, and a line border until the last table closes the card.
 */
export function RecordsRow({ last, children }: RecordsRowProps) {
	const { palette } = useEmailTheme();
	return (
		<tr>
			<td
				style={
					last
						? { padding: "0 24px 22px" }
						: { padding: "0 24px 18px", borderBottom: `1px solid ${palette.line}` }
				}
			>
				{children}
			</td>
		</tr>
	);
}

export type SessionsRowProps = { children?: ReactNode };

/** The card row the sessions table sits in, which never closes a card. */
export function SessionsRow({ children }: SessionsRowProps) {
	return (
		<tr>
			<td style={{ padding: "0 24px 20px" }}>{children}</td>
		</tr>
	);
}

/** The empty row that stands in for the what moved bar, so the card keeps its foot. */
export function SpacerRow() {
	return (
		<tr>
			<td style={{ padding: "0 0 26px" }} />
		</tr>
	);
}

/* ---------- recruiter ---------- */

export type FaintSpanProps = { children?: ReactNode };

/** A quiet aside inside a list row: a note after a name, a count after a list. */
export function FaintSpan({ children }: FaintSpanProps) {
	const { palette } = useEmailTheme();
	return <span style={{ color: palette.faint }}>{children}</span>;
}

export type FractionalEmptyRowProps = { text: string };

/**
 * The fractional lane's empty state, which keeps its bottom line because the
 * prospects and tradeoff notes follow it inside the same card.
 */
export function FractionalEmptyRow({ text }: FractionalEmptyRowProps) {
	const { palette, fonts } = useEmailTheme();
	return (
		<tr>
			<td
				style={{
					padding: "22px 24px 20px",
					fontFamily: fonts.sans,
					fontSize: "14px",
					color: palette.dim,
					borderBottom: `1px solid ${palette.line}`,
				}}
			>
				{text}
			</td>
		</tr>
	);
}
