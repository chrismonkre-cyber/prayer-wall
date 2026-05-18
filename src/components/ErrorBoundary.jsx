import React from "react";
import { Link } from "react-router-dom";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            background: "#050001",
            padding: "24px",
            textAlign: "center",
          }}
        >
          <img
            src="https://media.base44.com/images/public/6a088d4305ad1c2a40626604/5c6ab99e4_KMM-logo-circle-transparent.png"
            alt="Kingdom Mandate Ministry"
            style={{ width: "80px", height: "80px", objectFit: "contain", marginBottom: "24px", opacity: 0.7 }}
          />
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "1.5rem",
              color: "#FFD84D",
              marginBottom: "12px",
              textShadow: "0 0 20px rgba(212,160,48,0.5)",
            }}
          >
            Something went wrong
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              color: "rgba(205,172,125,0.85)",
              fontSize: "0.95rem",
              maxWidth: "400px",
              marginBottom: "28px",
              lineHeight: 1.6,
            }}
          >
            Something went wrong loading this page. Please refresh or return Home.
          </p>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", justifyContent: "center" }}>
            <button
              onClick={() => this.setState({ hasError: false })}
              style={{
                fontFamily: "var(--font-heading)",
                background: "linear-gradient(135deg, #f2c94c 0%, #d4a030 55%, #a06818 100%)",
                color: "#050001",
                border: "none",
                borderRadius: "8px",
                padding: "10px 22px",
                fontWeight: "700",
                cursor: "pointer",
                fontSize: "0.85rem",
              }}
            >
              Try Again
            </button>
            <Link
              to="/"
              onClick={() => this.setState({ hasError: false })}
              style={{
                fontFamily: "var(--font-heading)",
                background: "rgba(5,0,2,0.80)",
                color: "#f2c94c",
                border: "1px solid rgba(212,160,48,0.50)",
                borderRadius: "8px",
                padding: "10px 22px",
                fontWeight: "700",
                cursor: "pointer",
                fontSize: "0.85rem",
                textDecoration: "none",
              }}
            >
              Return Home
            </Link>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}