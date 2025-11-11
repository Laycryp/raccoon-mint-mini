(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,570826,e=>{"use strict";var t=`{
  "connect_wallet": {
    "label": "Connect Wallet",
    "wrong_network": {
      "label": "Wrong network"
    }
  },

  "intro": {
    "title": "What is a Wallet?",
    "description": "A wallet is used to send, receive, store, and display digital assets. It's also a new way to log in, without needing to create new accounts and passwords on every website.",
    "digital_asset": {
      "title": "A Home for your Digital Assets",
      "description": "Wallets are used to send, receive, store, and display digital assets like Ethereum and NFTs."
    },
    "login": {
      "title": "A New Way to Log In",
      "description": "Instead of creating new accounts and passwords on every website, just connect your wallet."
    },
    "get": {
      "label": "Get a Wallet"
    },
    "learn_more": {
      "label": "Learn More"
    }
  },

  "sign_in": {
    "label": "Verify your account",
    "description": "To finish connecting, you must sign a message in your wallet to verify that you are the owner of this account.",
    "message": {
      "send": "Sign message",
      "preparing": "Preparing message...",
      "cancel": "Cancel",
      "preparing_error": "Error preparing message, please retry!"
    },
    "signature": {
      "waiting": "Waiting for signature...",
      "verifying": "Verifying signature...",
      "signing_error": "Error signing message, please retry!",
      "verifying_error": "Error verifying signature, please retry!",
      "oops_error": "Oops, something went wrong!"
    }
  },

  "connect": {
    "label": "Connect",
    "title": "Connect a Wallet",
    "new_to_ethereum": {
      "description": "New to Ethereum wallets?",
      "learn_more": {
        "label": "Learn More"
      }
    },
    "learn_more": {
      "label": "Learn more"
    },
    "recent": "Recent",
    "status": {
      "opening": "Opening %{wallet}...",
      "connecting": "Connecting",
      "connect_mobile": "Continue in %{wallet}",
      "not_installed": "%{wallet} is not installed",
      "not_available": "%{wallet} is not available",
      "confirm": "Confirm connection in the extension",
      "confirm_mobile": "Accept connection request in the wallet"
    },
    "secondary_action": {
      "get": {
        "description": "Don't have %{wallet}?",
        "label": "GET"
      },
      "install": {
        "label": "INSTALL"
      },
      "retry": {
        "label": "RETRY"
      }
    },
    "walletconnect": {
      "description": {
        "full": "Need the official WalletConnect modal?",
        "compact": "Need the WalletConnect modal?"
      },
      "open": {
        "label": "OPEN"
      }
    }
  },

  "connect_scan": {
    "title": "Scan with %{wallet}",
    "fallback_title": "Scan with your phone"
  },

  "connector_group": {
    "installed": "Installed",
    "recommended": "Recommended",
    "other": "Other",
    "popular": "Popular",
    "more": "More",
    "others": "Others"
  },

  "get": {
    "title": "Get a Wallet",
    "action": {
      "label": "GET"
    },
    "mobile": {
      "description": "Mobile Wallet"
    },
    "extension": {
      "description": "Browser Extension"
    },
    "mobile_and_extension": {
      "description": "Mobile Wallet and Extension"
    },
    "mobile_and_desktop": {
      "description": "Mobile and Desktop Wallet"
    },
    "looking_for": {
      "title": "Not what you're looking for?",
      "mobile": {
        "description": "Select a wallet on the main screen to get started with a different wallet provider."
      },
      "desktop": {
        "compact_description": "Select a wallet on the main screen to get started with a different wallet provider.",
        "wide_description": "Select a wallet on the left to get started with a different wallet provider."
      }
    }
  },

  "get_options": {
    "title": "Get started with %{wallet}",
    "short_title": "Get %{wallet}",
    "mobile": {
      "title": "%{wallet} for Mobile",
      "description": "Use the mobile wallet to explore the world of Ethereum.",
      "download": {
        "label": "Get the app"
      }
    },
    "extension": {
      "title": "%{wallet} for %{browser}",
      "description": "Access your wallet right from your favorite web browser.",
      "download": {
        "label": "Add to %{browser}"
      }
    },
    "desktop": {
      "title": "%{wallet} for %{platform}",
      "description": "Access your wallet natively from your powerful desktop.",
      "download": {
        "label": "Add to %{platform}"
      }
    }
  },

  "get_mobile": {
    "title": "Install %{wallet}",
    "description": "Scan with your phone to download on iOS or Android",
    "continue": {
      "label": "Continue"
    }
  },

  "get_instructions": {
    "mobile": {
      "connect": {
        "label": "Connect"
      },
      "learn_more": {
        "label": "Learn More"
      }
    },
    "extension": {
      "refresh": {
        "label": "Refresh"
      },
      "learn_more": {
        "label": "Learn More"
      }
    },
    "desktop": {
      "connect": {
        "label": "Connect"
      },
      "learn_more": {
        "label": "Learn More"
      }
    }
  },

  "chains": {
    "title": "Switch Networks",
    "wrong_network": "Wrong network detected, switch or disconnect to continue.",
    "confirm": "Confirm in Wallet",
    "switching_not_supported": "Your wallet does not support switching networks from %{appName}. Try switching networks from within your wallet instead.",
    "switching_not_supported_fallback": "Your wallet does not support switching networks from this app. Try switching networks from within your wallet instead.",
    "disconnect": "Disconnect",
    "connected": "Connected"
  },

  "profile": {
    "disconnect": {
      "label": "Disconnect"
    },
    "copy_address": {
      "label": "Copy Address",
      "copied": "Copied!"
    },
    "explorer": {
      "label": "View more on explorer"
    },
    "transactions": {
      "description": "%{appName} transactions will appear here...",
      "description_fallback": "Your transactions will appear here...",
      "recent": {
        "title": "Recent Transactions"
      },
      "clear": {
        "label": "Clear All"
      }
    }
  },

  "wallet_connectors": {
    "argent": {
      "qr_code": {
        "step1": {
          "description": "Put Argent on your home screen for faster access to your wallet.",
          "title": "Open the Argent app"
        },
        "step2": {
          "description": "Create a wallet and username, or import an existing wallet.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the Scan QR button"
        }
      }
    },

    "berasig": {
      "extension": {
        "step1": {
          "title": "Install the BeraSig extension",
          "description": "We recommend pinning BeraSig to your taskbar for easier access to your wallet."
        },
        "step2": {
          "title": "Create a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "best": {
      "qr_code": {
        "step1": {
          "title": "Open the Best Wallet app",
          "description": "Add Best Wallet to your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the QR icon and scan",
          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."
        }
      }
    },

    "bifrost": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting Bifrost Wallet on your home screen for quicker access.",
          "title": "Open the Bifrost Wallet app"
        },
        "step2": {
          "description": "Create or import a wallet using your recovery phrase.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the scan button"
        }
      }
    },

    "bitget": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting Bitget Wallet on your home screen for quicker access.",
          "title": "Open the Bitget Wallet app"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the scan button"
        }
      },

      "extension": {
        "step1": {
          "description": "We recommend pinning Bitget Wallet to your taskbar for quicker access to your wallet.",
          "title": "Install the Bitget Wallet extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "bitski": {
      "extension": {
        "step1": {
          "description": "We recommend pinning Bitski to your taskbar for quicker access to your wallet.",
          "title": "Install the Bitski extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "bitverse": {
      "qr_code": {
        "step1": {
          "title": "Open the Bitverse Wallet app",
          "description": "Add Bitverse Wallet to your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the QR icon and scan",
          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."
        }
      }
    },

    "bloom": {
      "desktop": {
        "step1": {
          "title": "Open the Bloom Wallet app",
          "description": "We recommend putting Bloom Wallet on your home screen for quicker access."
        },
        "step2": {
          "description": "Create or import a wallet using your recovery phrase.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you have a wallet, click on Connect to connect via Bloom. A connection prompt in the app will appear for you to confirm the connection.",
          "title": "Click on Connect"
        }
      }
    },

    "bybit": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting Bybit on your home screen for faster access to your wallet.",
          "title": "Open the Bybit app"
        },
        "step2": {
          "description": "You can easily backup your wallet using our backup feature on your phone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the scan button"
        }
      },

      "extension": {
        "step1": {
          "description": "Click at the top right of your browser and pin Bybit Wallet for easy access.",
          "title": "Install the Bybit Wallet extension"
        },
        "step2": {
          "description": "Create a new wallet or import an existing one.",
          "title": "Create or Import a wallet"
        },
        "step3": {
          "description": "Once you set up Bybit Wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "binance": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting Binance on your home screen for faster access to your wallet.",
          "title": "Open the Binance app"
        },
        "step2": {
          "description": "You can easily backup your wallet using our backup feature on your phone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the WalletConnect button"
        }
      },
      "extension": {
        "step1": {
          "title": "Install the Binance Wallet extension",
          "description": "We recommend pinning Binance Wallet to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "coin98": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting Coin98 Wallet on your home screen for faster access to your wallet.",
          "title": "Open the Coin98 Wallet app"
        },
        "step2": {
          "description": "You can easily backup your wallet using our backup feature on your phone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the WalletConnect button"
        }
      },

      "extension": {
        "step1": {
          "description": "Click at the top right of your browser and pin Coin98 Wallet for easy access.",
          "title": "Install the Coin98 Wallet extension"
        },
        "step2": {
          "description": "Create a new wallet or import an existing one.",
          "title": "Create or Import a wallet"
        },
        "step3": {
          "description": "Once you set up Coin98 Wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "coinbase": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting Coinbase Wallet on your home screen for quicker access.",
          "title": "Open the Coinbase Wallet app"
        },
        "step2": {
          "description": "You can easily backup your wallet using the cloud backup feature.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the scan button"
        }
      },

      "extension": {
        "step1": {
          "description": "We recommend pinning Coinbase Wallet to your taskbar for quicker access to your wallet.",
          "title": "Install the Coinbase Wallet extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "compass": {
      "extension": {
        "step1": {
          "description": "We recommend pinning Compass Wallet to your taskbar for quicker access to your wallet.",
          "title": "Install the Compass Wallet extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "core": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting Core on your home screen for faster access to your wallet.",
          "title": "Open the Core app"
        },
        "step2": {
          "description": "You can easily backup your wallet using our backup feature on your phone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the WalletConnect button"
        }
      },

      "extension": {
        "step1": {
          "description": "We recommend pinning Core to your taskbar for quicker access to your wallet.",
          "title": "Install the Core extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "fox": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting FoxWallet on your home screen for quicker access.",
          "title": "Open the FoxWallet app"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the scan button"
        }
      }
    },

    "frontier": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting Frontier Wallet on your home screen for quicker access.",
          "title": "Open the Frontier Wallet app"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the scan button"
        }
      },

      "extension": {
        "step1": {
          "description": "We recommend pinning Frontier Wallet to your taskbar for quicker access to your wallet.",
          "title": "Install the Frontier Wallet extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "im_token": {
      "qr_code": {
        "step1": {
          "title": "Open the imToken app",
          "description": "Put imToken app on your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap Scanner Icon in top right corner",
          "description": "Choose New Connection, then scan the QR code and confirm the prompt to connect."
        }
      }
    },

    "iopay": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting ioPay on your home screen for faster access to your wallet.",
          "title": "Open the ioPay app"
        },
        "step2": {
          "description": "You can easily backup your wallet using our backup feature on your phone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the WalletConnect button"
        }
      }
    },

    "kaikas": {
      "extension": {
        "step1": {
          "description": "We recommend pinning Kaikas to your taskbar for quicker access to your wallet.",
          "title": "Install the Kaikas extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      },
      "qr_code": {
        "step1": {
          "title": "Open the Kaikas app",
          "description": "Put Kaikas app on your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap Scanner Icon in top right corner",
          "description": "Choose New Connection, then scan the QR code and confirm the prompt to connect."
        }
      }
    },

    "kaia": {
      "extension": {
        "step1": {
          "description": "We recommend pinning Kaia to your taskbar for quicker access to your wallet.",
          "title": "Install the Kaia extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      },
      "qr_code": {
        "step1": {
          "title": "Open the Kaia app",
          "description": "Put Kaia app on your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap Scanner Icon in top right corner",
          "description": "Choose New Connection, then scan the QR code and confirm the prompt to connect."
        }
      }
    },

    "kraken": {
      "qr_code": {
        "step1": {
          "title": "Open the Kraken Wallet app",
          "description": "Add Kraken Wallet to your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the QR icon and scan",
          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."
        }
      }
    },

    "kresus": {
      "qr_code": {
        "step1": {
          "title": "Open the Kresus Wallet app",
          "description": "Add Kresus Wallet to your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the QR icon and scan",
          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."
        }
      }
    },

    "magicEden": {
      "extension": {
        "step1": {
          "title": "Install the Magic Eden extension",
          "description": "We recommend pinning Magic Eden to your taskbar for easier access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret recovery phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "metamask": {
      "qr_code": {
        "step1": {
          "title": "Open the MetaMask app",
          "description": "We recommend putting MetaMask on your home screen for quicker access."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      },

      "extension": {
        "step1": {
          "title": "Install the MetaMask extension",
          "description": "We recommend pinning MetaMask to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "nestwallet": {
      "extension": {
        "step1": {
          "title": "Install the NestWallet extension",
          "description": "We recommend pinning NestWallet to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "okx": {
      "qr_code": {
        "step1": {
          "title": "Open the OKX Wallet app",
          "description": "We recommend putting OKX Wallet on your home screen for quicker access."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      },

      "extension": {
        "step1": {
          "title": "Install the OKX Wallet extension",
          "description": "We recommend pinning OKX Wallet to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "omni": {
      "qr_code": {
        "step1": {
          "title": "Open the Omni app",
          "description": "Add Omni to your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the QR icon and scan",
          "description": "Tap the QR icon on your home screen, scan the code and confirm the prompt to connect."
        }
      }
    },

    "1inch": {
      "qr_code": {
        "step1": {
          "description": "Put 1inch Wallet on your home screen for faster access to your wallet.",
          "title": "Open the 1inch Wallet app"
        },
        "step2": {
          "description": "Create a wallet and username, or import an existing wallet.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the Scan QR button"
        }
      }
    },

    "token_pocket": {
      "qr_code": {
        "step1": {
          "title": "Open the TokenPocket app",
          "description": "We recommend putting TokenPocket on your home screen for quicker access."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      },

      "extension": {
        "step1": {
          "title": "Install the TokenPocket extension",
          "description": "We recommend pinning TokenPocket to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "trust": {
      "qr_code": {
        "step1": {
          "title": "Open the Trust Wallet app",
          "description": "Put Trust Wallet on your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap WalletConnect in Settings",
          "description": "Choose New Connection, then scan the QR code and confirm the prompt to connect."
        }
      },

      "extension": {
        "step1": {
          "title": "Install the Trust Wallet extension",
          "description": "Click at the top right of your browser and pin Trust Wallet for easy access."
        },
        "step2": {
          "title": "Create or Import a wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up Trust Wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "uniswap": {
      "qr_code": {
        "step1": {
          "title": "Open the Uniswap app",
          "description": "Add Uniswap Wallet to your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the QR icon and scan",
          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."
        }
      }
    },

    "zerion": {
      "qr_code": {
        "step1": {
          "title": "Open the Zerion app",
          "description": "We recommend putting Zerion on your home screen for quicker access."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      },

      "extension": {
        "step1": {
          "title": "Install the Zerion extension",
          "description": "We recommend pinning Zerion to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "rainbow": {
      "qr_code": {
        "step1": {
          "title": "Open the Rainbow app",
          "description": "We recommend putting Rainbow on your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "You can easily backup your wallet using our backup feature on your phone."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      }
    },

    "enkrypt": {
      "extension": {
        "step1": {
          "description": "We recommend pinning Enkrypt Wallet to your taskbar for quicker access to your wallet.",
          "title": "Install the Enkrypt Wallet extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "frame": {
      "extension": {
        "step1": {
          "description": "We recommend pinning Frame to your taskbar for quicker access to your wallet.",
          "title": "Install Frame & the companion extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "one_key": {
      "extension": {
        "step1": {
          "title": "Install the OneKey Wallet extension",
          "description": "We recommend pinning OneKey Wallet to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "paraswap": {
      "qr_code": {
        "step1": {
          "title": "Open the ParaSwap app",
          "description": "Add ParaSwap Wallet to your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the QR icon and scan",
          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."
        }
      }
    },

    "phantom": {
      "extension": {
        "step1": {
          "title": "Install the Phantom extension",
          "description": "We recommend pinning Phantom to your taskbar for easier access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret recovery phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "rabby": {
      "extension": {
        "step1": {
          "title": "Install the Rabby extension",
          "description": "We recommend pinning Rabby to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "ronin": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting Ronin Wallet on your home screen for quicker access.",
          "title": "Open the Ronin Wallet app"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the scan button"
        }
      },

      "extension": {
        "step1": {
          "description": "We recommend pinning Ronin Wallet to your taskbar for quicker access to your wallet.",
          "title": "Install the Ronin Wallet extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "ramper": {
      "extension": {
        "step1": {
          "title": "Install the Ramper extension",
          "description": "We recommend pinning Ramper to your taskbar for easier access to your wallet."
        },
        "step2": {
          "title": "Create a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "safeheron": {
      "extension": {
        "step1": {
          "title": "Install the Core extension",
          "description": "We recommend pinning Safeheron to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "taho": {
      "extension": {
        "step1": {
          "title": "Install the Taho extension",
          "description": "We recommend pinning Taho to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "wigwam": {
      "extension": {
        "step1": {
          "title": "Install the Wigwam extension",
          "description": "We recommend pinning Wigwam to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "talisman": {
      "extension": {
        "step1": {
          "title": "Install the Talisman extension",
          "description": "We recommend pinning Talisman to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import an Ethereum Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your recovery phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "xdefi": {
      "extension": {
        "step1": {
          "title": "Install the XDEFI Wallet extension",
          "description": "We recommend pinning XDEFI Wallet to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "zeal": {
      "qr_code": {
        "step1": {
          "title": "Open the Zeal app",
          "description": "Add Zeal Wallet to your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the QR icon and scan",
          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."
        }
      },
      "extension": {
        "step1": {
          "title": "Install the Zeal extension",
          "description": "We recommend pinning Zeal to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "safepal": {
      "extension": {
        "step1": {
          "title": "Install the SafePal Wallet extension",
          "description": "Click at the top right of your browser and pin SafePal Wallet for easy access."
        },
        "step2": {
          "title": "Create or Import a wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up SafePal Wallet, click below to refresh the browser and load up the extension."
        }
      },
      "qr_code": {
        "step1": {
          "title": "Open the SafePal Wallet app",
          "description": "Put SafePal Wallet on your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap WalletConnect in Settings",
          "description": "Choose New Connection, then scan the QR code and confirm the prompt to connect."
        }
      }
    },

    "desig": {
      "extension": {
        "step1": {
          "title": "Install the Desig extension",
          "description": "We recommend pinning Desig to your taskbar for easier access to your wallet."
        },
        "step2": {
          "title": "Create a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "subwallet": {
      "extension": {
        "step1": {
          "title": "Install the SubWallet extension",
          "description": "We recommend pinning SubWallet to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your recovery phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      },
      "qr_code": {
        "step1": {
          "title": "Open the SubWallet app",
          "description": "We recommend putting SubWallet on your home screen for quicker access."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      }
    },

    "clv": {
      "extension": {
        "step1": {
          "title": "Install the CLV Wallet extension",
          "description": "We recommend pinning CLV Wallet to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      },
      "qr_code": {
        "step1": {
          "title": "Open the CLV Wallet app",
          "description": "We recommend putting CLV Wallet on your home screen for quicker access."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      }
    },

    "okto": {
      "qr_code": {
        "step1": {
          "title": "Open the Okto app",
          "description": "Add Okto to your home screen for quick access"
        },
        "step2": {
          "title": "Create an MPC Wallet",
          "description": "Create an account and generate a wallet"
        },
        "step3": {
          "title": "Tap WalletConnect in Settings",
          "description": "Tap the Scan QR icon at the top right and confirm the prompt to connect."
        }
      }
    },

    "ledger": {
      "desktop": {
        "step1": {
          "title": "Open the Ledger Live app",
          "description": "We recommend putting Ledger Live on your home screen for quicker access."
        },
        "step2": {
          "title": "Set up your Ledger",
          "description": "Set up a new Ledger or connect to an existing one."
        },
        "step3": {
          "title": "Connect",
          "description": "A connection prompt will appear for you to connect your wallet."
        }
      },
      "qr_code": {
        "step1": {
          "title": "Open the Ledger Live app",
          "description": "We recommend putting Ledger Live on your home screen for quicker access."
        },
        "step2": {
          "title": "Set up your Ledger",
          "description": "You can either sync with the desktop app or connect your Ledger."
        },
        "step3": {
          "title": "Scan the code",
          "description": "Tap WalletConnect then Switch to Scanner. After you scan, a connection prompt will appear for you to connect your wallet."
        }
      }
    },

    "valora": {
      "qr_code": {
        "step1": {
          "title": "Open the Valora app",
          "description": "We recommend putting Valora on your home screen for quicker access."
        },
        "step2": {
          "title": "Create or import a wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      }
    },

    "gate": {
      "qr_code": {
        "step1": {
          "title": "Open the Gate app",
          "description": "We recommend putting Gate on your home screen for quicker access."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      },
      "extension": {
        "step1": {
          "title": "Install the Gate extension",
          "description": "We recommend pinning Gate to your taskbar for easier access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret recovery phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "gemini": {
      "qr_code": {
        "step1": {
          "title": "Open keys.gemini.com",
          "description": "Visit keys.gemini.com on your mobile browser - no app download required."
        },
        "step2": {
          "title": "Create Your Wallet Instantly",
          "description": "Set up your smart wallet in seconds using your device's built-in authentication."
        },
        "step3": {
          "title": "Scan to Connect",
          "description": "Scan the QR code to instantly connect your wallet - it just works."
        }
      },
      "extension": {
        "step1": {
          "title": "Go to keys.gemini.com",
          "description": "No extensions or downloads needed - your wallet lives securely in the browser."
        },
        "step2": {
          "title": "One-Click Setup",
          "description": "Create your smart wallet instantly with passkey authentication - easier than any wallet out there."
        },
        "step3": {
          "title": "Connect and Go",
          "description": "Approve the connection and you're ready - the unopinionated wallet that just works."
        }
      }
    },

    "xportal": {
      "qr_code": {
        "step1": {
          "description": "Put xPortal on your home screen for faster access to your wallet.",
          "title": "Open the xPortal app"
        },
        "step2": {
          "description": "Create a wallet or import an existing one.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the Scan QR button"
        }
      }
    },

    "mew": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting MEW Wallet on your home screen for quicker access.",
          "title": "Open the MEW Wallet app"
        },
        "step2": {
          "description": "You can easily backup your wallet using the cloud backup feature.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the scan button"
        }
      }
    },

    "zilpay": {
      "qr_code": {
        "step1": {
          "title": "Open the ZilPay app",
          "description": "Add ZilPay to your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      }
    },

    "nova": {
      "qr_code": {
        "step1": {
          "title": "Open the Nova Wallet app",
          "description": "Add Nova Wallet to your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      }
    }
  }
}
`;e.s(["en_US_default",()=>t])},350781,442837,248399,440805,635961,470893,998324,e=>{"use strict";let t={gasPriceOracle:{address:"0x420000000000000000000000000000000000000F"},l1Block:{address:"0x4200000000000000000000000000000000000015"},l2CrossDomainMessenger:{address:"0x4200000000000000000000000000000000000007"},l2Erc721Bridge:{address:"0x4200000000000000000000000000000000000014"},l2StandardBridge:{address:"0x4200000000000000000000000000000000000010"},l2ToL1MessagePasser:{address:"0x4200000000000000000000000000000000000016"}};e.s(["contracts",0,t],442837);var o=e.i(346706),r=e.i(118614),n=e.i(449571),a=e.i(400649);let s={block:(0,r.defineBlock)({format:e=>({transactions:e.transactions?.map(e=>{if("string"==typeof e)return e;let t=(0,n.formatTransaction)(e);return"0x7e"===t.typeHex&&(t.isSystemTx=e.isSystemTx,t.mint=e.mint?(0,o.hexToBigInt)(e.mint):void 0,t.sourceHash=e.sourceHash,t.type="deposit"),t}),stateRoot:e.stateRoot})}),transaction:(0,n.defineTransaction)({format(e){let t={};return"0x7e"===e.type&&(t.isSystemTx=e.isSystemTx,t.mint=e.mint?(0,o.hexToBigInt)(e.mint):void 0,t.sourceHash=e.sourceHash,t.type="deposit"),t}}),transactionReceipt:(0,a.defineTransactionReceipt)({format:e=>({l1GasPrice:e.l1GasPrice?(0,o.hexToBigInt)(e.l1GasPrice):null,l1GasUsed:e.l1GasUsed?(0,o.hexToBigInt)(e.l1GasUsed):null,l1Fee:e.l1Fee?(0,o.hexToBigInt)(e.l1Fee):null,l1FeeScalar:e.l1FeeScalar?Number(e.l1FeeScalar):null})})};e.s(["formatters",0,s],248399);var i=e.i(121893),l=e.i(510628),c=e.i(815598),p=e.i(380573),u=e.i(183388);e.s(["serializeTransaction",()=>q,"toYParitySignatureArray",()=>A],635961);var h=e.i(916379),d=e.i(394772),m=e.i(139863),y=e.i(891002),f=e.i(886623),w=e.i(471088),b=e.i(761756),g=e.i(261292),k=e.i(727196),x=e.i(903339),v=e.i(75714),C=e.i(684440),W=e.i(119377),I=e.i(837070);function T(e){let{chainId:t,maxPriorityFeePerGas:o,maxFeePerGas:r,to:n}=e;if(t<=0)throw new v.InvalidChainIdError({chainId:t});if(n&&!(0,l.isAddress)(n))throw new i.InvalidAddressError({address:n});if(r&&r>g.maxUint256)throw new C.FeeCapTooHighError({maxFeePerGas:r});if(o&&r&&o>r)throw new C.TipAboveFeeCapError({maxFeePerGas:r,maxPriorityFeePerGas:o})}var P=e.i(955800);function O(e){if(!e||0===e.length)return[];let t=[];for(let o=0;o<e.length;o++){let{address:r,storageKeys:n}=e[o];for(let e=0;e<n.length;e++)if(n[e].length-2!=64)throw new h.InvalidStorageKeySizeError({storageKey:n[e]});if(!(0,l.isAddress)(r,{strict:!1}))throw new i.InvalidAddressError({address:r});t.push([r,n])}return t}function q(e,t){let r=(0,P.getTransactionType)(e);return"eip1559"===r?function(e,t){let{chainId:o,gas:r,nonce:n,to:a,value:s,maxFeePerGas:i,maxPriorityFeePerGas:l,accessList:h,data:d}=e;T(e);let m=O(h),y=[(0,p.numberToHex)(o),n?(0,p.numberToHex)(n):"0x",l?(0,p.numberToHex)(l):"0x",i?(0,p.numberToHex)(i):"0x",r?(0,p.numberToHex)(r):"0x",a??"0x",s?(0,p.numberToHex)(s):"0x",d??"0x",m,...A(e,t)];return(0,c.concatHex)(["0x02",(0,u.toRlp)(y)])}(e,t):"eip2930"===r?function(e,t){let{chainId:o,gas:r,data:n,nonce:a,to:s,value:h,accessList:d,gasPrice:m}=e;!function(e){let{chainId:t,maxPriorityFeePerGas:o,gasPrice:r,maxFeePerGas:n,to:a}=e;if(t<=0)throw new v.InvalidChainIdError({chainId:t});if(a&&!(0,l.isAddress)(a))throw new i.InvalidAddressError({address:a});if(o||n)throw new k.BaseError("`maxFeePerGas`/`maxPriorityFeePerGas` is not a valid EIP-2930 Transaction attribute.");if(r&&r>g.maxUint256)throw new C.FeeCapTooHighError({maxFeePerGas:r})}(e);let y=O(d),f=[(0,p.numberToHex)(o),a?(0,p.numberToHex)(a):"0x",m?(0,p.numberToHex)(m):"0x",r?(0,p.numberToHex)(r):"0x",s??"0x",h?(0,p.numberToHex)(h):"0x",n??"0x",y,...A(e,t)];return(0,c.concatHex)(["0x01",(0,u.toRlp)(f)])}(e,t):"eip4844"===r?function(e,t){let{chainId:r,gas:n,nonce:a,to:s,value:i,maxFeePerBlobGas:l,maxFeePerGas:h,maxPriorityFeePerGas:w,accessList:g,data:k}=e;!function(e){let{blobVersionedHashes:t}=e;if(t){if(0===t.length)throw new x.EmptyBlobError;for(let e of t){let t=(0,W.size)(e),r=(0,o.hexToNumber)((0,I.slice)(e,0,1));if(32!==t)throw new x.InvalidVersionedHashSizeError({hash:e,size:t});if(r!==b.versionedHashVersionKzg)throw new x.InvalidVersionedHashVersionError({hash:e,version:r})}}T(e)}(e);let v=e.blobVersionedHashes,C=e.sidecars;if(e.blobs&&(void 0===v||void 0===C)){let t="string"==typeof e.blobs[0]?e.blobs:e.blobs.map(e=>(0,p.bytesToHex)(e)),o=e.kzg,r=(0,d.blobsToCommitments)({blobs:t,kzg:o});if(void 0===v&&(v=(0,y.commitmentsToVersionedHashes)({commitments:r})),void 0===C){let e=(0,m.blobsToProofs)({blobs:t,commitments:r,kzg:o});C=(0,f.toBlobSidecars)({blobs:t,commitments:r,proofs:e})}}let P=O(g),q=[(0,p.numberToHex)(r),a?(0,p.numberToHex)(a):"0x",w?(0,p.numberToHex)(w):"0x",h?(0,p.numberToHex)(h):"0x",n?(0,p.numberToHex)(n):"0x",s??"0x",i?(0,p.numberToHex)(i):"0x",k??"0x",P,l?(0,p.numberToHex)(l):"0x",v??[],...A(e,t)],R=[],B=[],j=[];if(C)for(let e=0;e<C.length;e++){let{blob:t,commitment:o,proof:r}=C[e];R.push(t),B.push(o),j.push(r)}return(0,c.concatHex)(["0x03",C?(0,u.toRlp)([q,R,B,j]):(0,u.toRlp)(q)])}(e,t):"eip7702"===r?function(e,t){let{authorizationList:o,chainId:r,gas:n,nonce:a,to:s,value:h,maxFeePerGas:d,maxPriorityFeePerGas:m,accessList:y,data:f}=e;!function(e){let{authorizationList:t}=e;if(t)for(let e of t){let{chainId:t}=e,o=e.address;if(!(0,l.isAddress)(o))throw new i.InvalidAddressError({address:o});if(t<0)throw new v.InvalidChainIdError({chainId:t})}T(e)}(e);let w=O(y),b=function(e){if(!e||0===e.length)return[];let t=[];for(let o of e){let{chainId:e,nonce:r,...n}=o,a=o.address;t.push([e?(0,p.toHex)(e):"0x",a,r?(0,p.toHex)(r):"0x",...A({},n)])}return t}(o);return(0,c.concatHex)(["0x04",(0,u.toRlp)([(0,p.numberToHex)(r),a?(0,p.numberToHex)(a):"0x",m?(0,p.numberToHex)(m):"0x",d?(0,p.numberToHex)(d):"0x",n?(0,p.numberToHex)(n):"0x",s??"0x",h?(0,p.numberToHex)(h):"0x",f??"0x",w,b,...A(e,t)])])}(e,t):function(e,t){let{chainId:o=0,gas:r,data:n,nonce:a,to:s,value:c,gasPrice:d}=e;!function(e){let{chainId:t,maxPriorityFeePerGas:o,gasPrice:r,maxFeePerGas:n,to:a}=e;if(a&&!(0,l.isAddress)(a))throw new i.InvalidAddressError({address:a});if(void 0!==t&&t<=0)throw new v.InvalidChainIdError({chainId:t});if(o||n)throw new k.BaseError("`maxFeePerGas`/`maxPriorityFeePerGas` is not a valid Legacy Transaction attribute.");if(r&&r>g.maxUint256)throw new C.FeeCapTooHighError({maxFeePerGas:r})}(e);let m=[a?(0,p.numberToHex)(a):"0x",d?(0,p.numberToHex)(d):"0x",r?(0,p.numberToHex)(r):"0x",s??"0x",c?(0,p.numberToHex)(c):"0x",n??"0x"];if(t){let e=(()=>{if(t.v>=35n)return(t.v-35n)/2n>0?t.v:27n+(35n===t.v?0n:1n);if(o>0)return BigInt(2*o)+BigInt(35n+t.v-27n);let e=27n+(27n===t.v?0n:1n);if(t.v!==e)throw new h.InvalidLegacyVError({v:t.v});return e})(),r=(0,w.trim)(t.r),n=(0,w.trim)(t.s);m=[...m,(0,p.numberToHex)(e),"0x00"===r?"0x":r,"0x00"===n?"0x":n]}else o>0&&(m=[...m,(0,p.numberToHex)(o),"0x","0x"]);return(0,u.toRlp)(m)}(e,t)}function A(e,t){let o=t??e,{v:r,yParity:n}=o;if(void 0===o.r||void 0===o.s||void 0===r&&void 0===n)return[];let a=(0,w.trim)(o.r),s=(0,w.trim)(o.s);return["number"==typeof n?n?(0,p.numberToHex)(1):"0x":0n===r?"0x":1n===r?(0,p.numberToHex)(1):27n===r?"0x":(0,p.numberToHex)(1),"0x00"===a?"0x":a,"0x00"===s?"0x":s]}function R(e,t){var o;return"deposit"===(o=e).type||void 0!==o.sourceHash?function(e){!function(e){let{from:t,to:o}=e;if(t&&!(0,l.isAddress)(t))throw new i.InvalidAddressError({address:t});if(o&&!(0,l.isAddress)(o))throw new i.InvalidAddressError({address:o})}(e);let{sourceHash:t,data:o,from:r,gas:n,isSystemTx:a,mint:s,to:h,value:d}=e,m=[t,r,h??"0x",s?(0,p.toHex)(s):"0x",d?(0,p.toHex)(d):"0x",n?(0,p.toHex)(n):"0x",a?"0x1":"0x",o??"0x"];return(0,c.concatHex)(["0x7e",(0,u.toRlp)(m)])}(e):q(e,t)}e.s(["serializeAccessList",()=>O],440805);let B={transaction:R};e.s(["serializeTransaction",()=>R,"serializers",0,B],470893);let j={blockTime:2e3,contracts:t,formatters:s,serializers:B};e.s(["chainConfig",0,j],998324);var _=e.i(540078);let S=(0,_.defineChain)({...j,id:8453,name:"Base",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:{default:{http:["https://mainnet.base.org"]}},blockExplorers:{default:{name:"Basescan",url:"https://basescan.org",apiUrl:"https://api.basescan.org/api"}},contracts:{...j.contracts,disputeGameFactory:{1:{address:"0x43edB88C4B80fDD2AdFF2412A7BebF9dF42cB40e"}},l2OutputOracle:{1:{address:"0x56315b90c40730925ec5485cf004d835058518A0"}},multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:5022},portal:{1:{address:"0x49048044D57e1C92A77f79988d21Fa8fAF74E97e",blockCreated:0x10ac19f}},l1StandardBridge:{1:{address:"0x3154Cf16ccdb4C6d922629664174b904d80F2C35",blockCreated:0x10ac19f}}},sourceId:1}),Q=(0,_.defineChain)({...S,experimental_preconfirmationTime:200,rpcUrls:{default:{http:["https://mainnet-preconf.base.org"]}}});e.s(["base",0,S,"basePreconf",0,Q],350781)},920052,e=>{"use strict";e.i(60126);var t=e.i(462200),o=e.i(393449),r=e.i(622729),n=e.i(535850),a=e.i(756034),s=e.i(743928),i=e.i(350781),l=e.i(779180),c=e.i(183513),p=e.i(866022),u=e.i(198994),h=class extends u.Subscribable{constructor(e={}){super(),this.config=e,this.#e=new Map}#e;build(e,t,o){let r=t.queryKey,n=t.queryHash??(0,l.hashQueryKeyByOptions)(r,t),a=this.get(n);return a||(a=new c.Query({client:e,queryKey:r,queryHash:n,options:e.defaultQueryOptions(t),state:o,defaultOptions:e.getQueryDefaults(r)}),this.add(a)),a}add(e){this.#e.has(e.queryHash)||(this.#e.set(e.queryHash,e),this.notify({type:"added",query:e}))}remove(e){let t=this.#e.get(e.queryHash);t&&(e.destroy(),t===e&&this.#e.delete(e.queryHash),this.notify({type:"removed",query:e}))}clear(){p.notifyManager.batch(()=>{this.getAll().forEach(e=>{this.remove(e)})})}get(e){return this.#e.get(e)}getAll(){return[...this.#e.values()]}find(e){let t={exact:!0,...e};return this.getAll().find(e=>(0,l.matchQuery)(t,e))}findAll(e={}){let t=this.getAll();return Object.keys(e).length>0?t.filter(t=>(0,l.matchQuery)(e,t)):t}notify(e){p.notifyManager.batch(()=>{this.listeners.forEach(t=>{t(e)})})}onFocus(){p.notifyManager.batch(()=>{this.getAll().forEach(e=>{e.onFocus()})})}onOnline(){p.notifyManager.batch(()=>{this.getAll().forEach(e=>{e.onOnline()})})}},d=e.i(1274),m=u,y=class extends m.Subscribable{constructor(e={}){super(),this.config=e,this.#t=new Set,this.#o=new Map,this.#r=0}#t;#o;#r;build(e,t,o){let r=new d.Mutation({client:e,mutationCache:this,mutationId:++this.#r,options:e.defaultMutationOptions(t),state:o});return this.add(r),r}add(e){this.#t.add(e);let t=f(e);if("string"==typeof t){let o=this.#o.get(t);o?o.push(e):this.#o.set(t,[e])}this.notify({type:"added",mutation:e})}remove(e){if(this.#t.delete(e)){let t=f(e);if("string"==typeof t){let o=this.#o.get(t);if(o)if(o.length>1){let t=o.indexOf(e);-1!==t&&o.splice(t,1)}else o[0]===e&&this.#o.delete(t)}}this.notify({type:"removed",mutation:e})}canRun(e){let t=f(e);if("string"!=typeof t)return!0;{let o=this.#o.get(t),r=o?.find(e=>"pending"===e.state.status);return!r||r===e}}runNext(e){let t=f(e);if("string"!=typeof t)return Promise.resolve();{let o=this.#o.get(t)?.find(t=>t!==e&&t.state.isPaused);return o?.continue()??Promise.resolve()}}clear(){p.notifyManager.batch(()=>{this.#t.forEach(e=>{this.notify({type:"removed",mutation:e})}),this.#t.clear(),this.#o.clear()})}getAll(){return Array.from(this.#t)}find(e){let t={exact:!0,...e};return this.getAll().find(e=>(0,l.matchMutation)(t,e))}findAll(e={}){return this.getAll().filter(t=>(0,l.matchMutation)(e,t))}notify(e){p.notifyManager.batch(()=>{this.listeners.forEach(t=>{t(e)})})}resumePausedMutations(){let e=this.getAll().filter(e=>e.state.isPaused);return p.notifyManager.batch(()=>Promise.all(e.map(e=>e.continue().catch(l.noop))))}};function f(e){return e.options.scope?.id}var w=e.i(478173),b=e.i(210141),g=e.i(744008),k=class{#n;#a;#s;#i;#l;#c;#p;#u;constructor(e={}){this.#n=e.queryCache||new h,this.#a=e.mutationCache||new y,this.#s=e.defaultOptions||{},this.#i=new Map,this.#l=new Map,this.#c=0}mount(){this.#c++,1===this.#c&&(this.#p=w.focusManager.subscribe(async e=>{e&&(await this.resumePausedMutations(),this.#n.onFocus())}),this.#u=b.onlineManager.subscribe(async e=>{e&&(await this.resumePausedMutations(),this.#n.onOnline())}))}unmount(){this.#c--,0===this.#c&&(this.#p?.(),this.#p=void 0,this.#u?.(),this.#u=void 0)}isFetching(e){return this.#n.findAll({...e,fetchStatus:"fetching"}).length}isMutating(e){return this.#a.findAll({...e,status:"pending"}).length}getQueryData(e){let t=this.defaultQueryOptions({queryKey:e});return this.#n.get(t.queryHash)?.state.data}ensureQueryData(e){let t=this.defaultQueryOptions(e),o=this.#n.build(this,t),r=o.state.data;return void 0===r?this.fetchQuery(e):(e.revalidateIfStale&&o.isStaleByTime((0,l.resolveStaleTime)(t.staleTime,o))&&this.prefetchQuery(t),Promise.resolve(r))}getQueriesData(e){return this.#n.findAll(e).map(({queryKey:e,state:t})=>[e,t.data])}setQueryData(e,t,o){let r=this.defaultQueryOptions({queryKey:e}),n=this.#n.get(r.queryHash),a=n?.state.data,s=(0,l.functionalUpdate)(t,a);if(void 0!==s)return this.#n.build(this,r).setData(s,{...o,manual:!0})}setQueriesData(e,t,o){return p.notifyManager.batch(()=>this.#n.findAll(e).map(({queryKey:e})=>[e,this.setQueryData(e,t,o)]))}getQueryState(e){let t=this.defaultQueryOptions({queryKey:e});return this.#n.get(t.queryHash)?.state}removeQueries(e){let t=this.#n;p.notifyManager.batch(()=>{t.findAll(e).forEach(e=>{t.remove(e)})})}resetQueries(e,t){let o=this.#n;return p.notifyManager.batch(()=>(o.findAll(e).forEach(e=>{e.reset()}),this.refetchQueries({type:"active",...e},t)))}cancelQueries(e,t={}){let o={revert:!0,...t};return Promise.all(p.notifyManager.batch(()=>this.#n.findAll(e).map(e=>e.cancel(o)))).then(l.noop).catch(l.noop)}invalidateQueries(e,t={}){return p.notifyManager.batch(()=>(this.#n.findAll(e).forEach(e=>{e.invalidate()}),e?.refetchType==="none")?Promise.resolve():this.refetchQueries({...e,type:e?.refetchType??e?.type??"active"},t))}refetchQueries(e,t={}){let o={...t,cancelRefetch:t.cancelRefetch??!0};return Promise.all(p.notifyManager.batch(()=>this.#n.findAll(e).filter(e=>!e.isDisabled()&&!e.isStatic()).map(e=>{let t=e.fetch(void 0,o);return o.throwOnError||(t=t.catch(l.noop)),"paused"===e.state.fetchStatus?Promise.resolve():t}))).then(l.noop)}fetchQuery(e){let t=this.defaultQueryOptions(e);void 0===t.retry&&(t.retry=!1);let o=this.#n.build(this,t);return o.isStaleByTime((0,l.resolveStaleTime)(t.staleTime,o))?o.fetch(t):Promise.resolve(o.state.data)}prefetchQuery(e){return this.fetchQuery(e).then(l.noop).catch(l.noop)}fetchInfiniteQuery(e){return e.behavior=(0,g.infiniteQueryBehavior)(e.pages),this.fetchQuery(e)}prefetchInfiniteQuery(e){return this.fetchInfiniteQuery(e).then(l.noop).catch(l.noop)}ensureInfiniteQueryData(e){return e.behavior=(0,g.infiniteQueryBehavior)(e.pages),this.ensureQueryData(e)}resumePausedMutations(){return b.onlineManager.isOnline()?this.#a.resumePausedMutations():Promise.resolve()}getQueryCache(){return this.#n}getMutationCache(){return this.#a}getDefaultOptions(){return this.#s}setDefaultOptions(e){this.#s=e}setQueryDefaults(e,t){this.#i.set((0,l.hashKey)(e),{queryKey:e,defaultOptions:t})}getQueryDefaults(e){let t=[...this.#i.values()],o={};return t.forEach(t=>{(0,l.partialMatchKey)(e,t.queryKey)&&Object.assign(o,t.defaultOptions)}),o}setMutationDefaults(e,t){this.#l.set((0,l.hashKey)(e),{mutationKey:e,defaultOptions:t})}getMutationDefaults(e){let t=[...this.#l.values()],o={};return t.forEach(t=>{(0,l.partialMatchKey)(e,t.mutationKey)&&Object.assign(o,t.defaultOptions)}),o}defaultQueryOptions(e){if(e._defaulted)return e;let t={...this.#s.queries,...this.getQueryDefaults(e.queryKey),...e,_defaulted:!0};return t.queryHash||(t.queryHash=(0,l.hashQueryKeyByOptions)(t.queryKey,t)),void 0===t.refetchOnReconnect&&(t.refetchOnReconnect="always"!==t.networkMode),void 0===t.throwOnError&&(t.throwOnError=!!t.suspense),!t.networkMode&&t.persister&&(t.networkMode="offlineFirst"),t.queryFn===l.skipToken&&(t.enabled=!1),t}defaultMutationOptions(e){return e?._defaulted?e:{...this.#s.mutations,...e?.mutationKey&&this.getMutationDefaults(e.mutationKey),...e,_defaulted:!0}}clear(){this.#n.clear(),this.#a.clear()}},x=e.i(981954),v=e.i(567456),C=e.i(48228);let W="https://base-mainnet.g.alchemy.com/v2/-ZMTAbXNoqjsjK8lrt1US",I=W&&W.length>0?W:"https://rpc.ankr.com/base";console.log("[RACCOON-MINT] Using RPC:",I);let T=(0,s.createConfig)({chains:[i.base],transports:{[i.base.id]:(0,v.http)(I,{fetchOptions:{cache:"no-store"},timeout:2e4,batch:!0,retryCount:1})},connectors:[(0,C.injected)()],ssr:!1});function P({children:e}){let s=(0,o.useMemo)(()=>new k,[]);return(0,t.jsx)(a.WagmiProvider,{config:T,children:(0,t.jsx)(x.QueryClientProvider,{client:s,children:(0,t.jsx)(r.RainbowKitProvider,{theme:(0,n.darkTheme)({accentColor:"#67e8f9",accentColorForeground:"#0b1220",borderRadius:"large"}),coolMode:!0,children:e})})})}e.s(["default",()=>P],920052)},53457,e=>{e.v(t=>Promise.all(["static/chunks/9471d99766e992c9.js"].map(t=>e.l(t))).then(()=>t(185300)))},402743,e=>{e.v(e=>Promise.resolve().then(()=>e(58941)))},130366,e=>{e.v(t=>Promise.all(["static/chunks/ed3480a52548d024.js","static/chunks/e6ff0a923f7da03d.js","static/chunks/3ccd9282db966093.js"].map(t=>e.l(t))).then(()=>t(586462)))},749246,e=>{e.v(t=>Promise.all(["static/chunks/955fd2681aca6fd5.js","static/chunks/ed5a5ef3e8b0c753.js"].map(t=>e.l(t))).then(()=>t(846289)))},931120,e=>{e.v(t=>Promise.all(["static/chunks/148d6221569f466b.js","static/chunks/c7bf9a63fae056c9.js"].map(t=>e.l(t))).then(()=>t(492168)))},937556,e=>{e.v(t=>Promise.all(["static/chunks/7df638c90e3152d8.js"].map(t=>e.l(t))).then(()=>t(318917)))},843456,e=>{e.v(t=>Promise.all(["static/chunks/aad568ee3b9a4e46.js","static/chunks/8b026ff3872f56b5.js"].map(t=>e.l(t))).then(()=>t(500755)))},211185,e=>{e.v(t=>Promise.all(["static/chunks/7ef6e8456a889fd4.js"].map(t=>e.l(t))).then(()=>t(888303)))},416078,e=>{e.v(t=>Promise.all(["static/chunks/96bf73151b5ca52f.js"].map(t=>e.l(t))).then(()=>t(715100)))},454428,e=>{e.v(t=>Promise.all(["static/chunks/d2549c39924e14ca.js"].map(t=>e.l(t))).then(()=>t(124208)))},214734,e=>{e.v(t=>Promise.all(["static/chunks/2e134480dc6928de.js"].map(t=>e.l(t))).then(()=>t(254505)))},312804,e=>{e.v(t=>Promise.all(["static/chunks/324fc7468f463009.js"].map(t=>e.l(t))).then(()=>t(708486)))},429135,e=>{e.v(t=>Promise.all(["static/chunks/e62ad3f3eee98fac.js"].map(t=>e.l(t))).then(()=>t(943801)))},634241,e=>{e.v(t=>Promise.all(["static/chunks/07de050974e8b386.js"].map(t=>e.l(t))).then(()=>t(661470)))},429884,e=>{e.v(t=>Promise.all(["static/chunks/81658830ca5d6d53.js"].map(t=>e.l(t))).then(()=>t(134198)))},265341,e=>{e.v(t=>Promise.all(["static/chunks/9c8028513a453c0c.js"].map(t=>e.l(t))).then(()=>t(978067)))},479098,e=>{e.v(t=>Promise.all(["static/chunks/25fbcdd81c37afcc.js"].map(t=>e.l(t))).then(()=>t(808444)))},758262,e=>{e.v(t=>Promise.all(["static/chunks/4e0bb9f51e1d8514.js"].map(t=>e.l(t))).then(()=>t(459570)))},554903,e=>{e.v(t=>Promise.all(["static/chunks/2f580e1887947a20.js"].map(t=>e.l(t))).then(()=>t(55569)))},360934,e=>{e.v(t=>Promise.all(["static/chunks/74ffbe613f117399.js"].map(t=>e.l(t))).then(()=>t(337719)))},52239,e=>{e.v(t=>Promise.all(["static/chunks/95e0f4d70d0c2a36.js"].map(t=>e.l(t))).then(()=>t(337050)))},216892,e=>{e.v(t=>Promise.all(["static/chunks/d0ab15561f9ec997.js"].map(t=>e.l(t))).then(()=>t(552563)))},66009,e=>{e.v(t=>Promise.all(["static/chunks/c162249cc88557b6.js"].map(t=>e.l(t))).then(()=>t(576930)))},803615,e=>{e.v(t=>Promise.all(["static/chunks/3b46afa11ad4801a.js"].map(t=>e.l(t))).then(()=>t(538060)))},416785,e=>{e.v(t=>Promise.all(["static/chunks/9e564903599e8f65.js"].map(t=>e.l(t))).then(()=>t(476437)))},326931,e=>{e.v(t=>Promise.all(["static/chunks/4eb437c47ca48008.js"].map(t=>e.l(t))).then(()=>t(414771)))},36434,e=>{e.v(t=>Promise.all(["static/chunks/5750a824412f1370.js"].map(t=>e.l(t))).then(()=>t(129275)))},160218,e=>{e.v(t=>Promise.all(["static/chunks/2eb182dd05633dd3.js"].map(t=>e.l(t))).then(()=>t(342770)))},349822,e=>{e.v(t=>Promise.all(["static/chunks/642c9687374aa283.js"].map(t=>e.l(t))).then(()=>t(377434)))},670645,e=>{e.v(t=>Promise.all(["static/chunks/a82c0429ff52565a.js"].map(t=>e.l(t))).then(()=>t(20859)))},76135,e=>{e.v(t=>Promise.all(["static/chunks/b492fcca3c3c9c99.js"].map(t=>e.l(t))).then(()=>t(768819)))},61178,e=>{e.v(t=>Promise.all(["static/chunks/eda6f1acef86420d.js"].map(t=>e.l(t))).then(()=>t(821409)))},581404,e=>{e.v(t=>Promise.all(["static/chunks/6fe6f9d7975fd960.js"].map(t=>e.l(t))).then(()=>t(560062)))},287750,e=>{e.v(t=>Promise.all(["static/chunks/ce5c0fd3c51fb9cf.js"].map(t=>e.l(t))).then(()=>t(159862)))},306737,e=>{e.v(t=>Promise.all(["static/chunks/6fb98d5c27ae3e9d.js"].map(t=>e.l(t))).then(()=>t(433434)))},830652,e=>{e.v(t=>Promise.all(["static/chunks/259e17d06a7b5d32.js"].map(t=>e.l(t))).then(()=>t(500728)))},367474,e=>{e.v(t=>Promise.all(["static/chunks/172a01e2025de3c6.js"].map(t=>e.l(t))).then(()=>t(804502)))},133999,e=>{e.v(t=>Promise.all(["static/chunks/7ef68400534e99fc.js"].map(t=>e.l(t))).then(()=>t(669380)))},505129,e=>{e.v(t=>Promise.all(["static/chunks/7dd4f10f4a1f5c71.js"].map(t=>e.l(t))).then(()=>t(168442)))},271239,e=>{e.v(t=>Promise.all(["static/chunks/f30d4d6ce7b5ad02.js"].map(t=>e.l(t))).then(()=>t(1342)))},459638,e=>{e.v(t=>Promise.all(["static/chunks/771cec096d75e048.js"].map(t=>e.l(t))).then(()=>t(674109)))},995206,e=>{e.v(t=>Promise.all(["static/chunks/151acd5ac58c5b03.js"].map(t=>e.l(t))).then(()=>t(5182)))},28571,e=>{e.v(t=>Promise.all(["static/chunks/e11e8c2a6aef4085.js"].map(t=>e.l(t))).then(()=>t(947495)))},299065,e=>{e.v(t=>Promise.all(["static/chunks/9d04c202ab80f5e4.js"].map(t=>e.l(t))).then(()=>t(469412)))},810804,e=>{e.v(t=>Promise.all(["static/chunks/b21edb87b26a1503.js"].map(t=>e.l(t))).then(()=>t(676587)))},364302,e=>{e.v(t=>Promise.all(["static/chunks/a3d251086dc3cd10.js"].map(t=>e.l(t))).then(()=>t(703813)))},656305,e=>{e.v(t=>Promise.all(["static/chunks/bdd9e3c3d36d2f8a.js"].map(t=>e.l(t))).then(()=>t(928710)))},206646,e=>{e.v(t=>Promise.all(["static/chunks/581e55c6e4e98aef.js"].map(t=>e.l(t))).then(()=>t(200056)))},315787,e=>{e.v(t=>Promise.all(["static/chunks/fdab62cd1b15d33f.js"].map(t=>e.l(t))).then(()=>t(784389)))},318906,e=>{e.v(t=>Promise.all(["static/chunks/d783389ab9fa611f.js"].map(t=>e.l(t))).then(()=>t(182543)))},50955,e=>{e.v(t=>Promise.all(["static/chunks/a010f1a5e8d8c436.js"].map(t=>e.l(t))).then(()=>t(822776)))},455602,e=>{e.v(t=>Promise.all(["static/chunks/a3de5ea1369c72b3.js"].map(t=>e.l(t))).then(()=>t(851839)))},289259,e=>{e.v(t=>Promise.all(["static/chunks/cb2db2295f07a660.js"].map(t=>e.l(t))).then(()=>t(436392)))},933779,e=>{e.v(t=>Promise.all(["static/chunks/05fb9c9ce65f2ace.js"].map(t=>e.l(t))).then(()=>t(854874)))},193930,e=>{e.v(t=>Promise.all(["static/chunks/694f4f6c14e08f62.js"].map(t=>e.l(t))).then(()=>t(315005)))},895837,e=>{e.v(t=>Promise.all(["static/chunks/95a0a09e4bb86151.js"].map(t=>e.l(t))).then(()=>t(286804)))},577590,e=>{e.v(t=>Promise.all(["static/chunks/56015cad25f1f2ae.js"].map(t=>e.l(t))).then(()=>t(34084)))},297674,e=>{e.v(t=>Promise.all(["static/chunks/c4e0d362491bb79d.js"].map(t=>e.l(t))).then(()=>t(229576)))},975525,e=>{e.v(t=>Promise.all(["static/chunks/a09dff1429602ed7.js"].map(t=>e.l(t))).then(()=>t(574082)))},734943,e=>{e.v(t=>Promise.all(["static/chunks/cfafaff2a764fb34.js"].map(t=>e.l(t))).then(()=>t(51725)))},958865,e=>{e.v(t=>Promise.all(["static/chunks/c9afc2f268422c29.js"].map(t=>e.l(t))).then(()=>t(63010)))},852931,e=>{e.v(t=>Promise.all(["static/chunks/375ba1b8c415d896.js"].map(t=>e.l(t))).then(()=>t(369946)))},488803,e=>{e.v(t=>Promise.all(["static/chunks/9239313ddfeed04b.js"].map(t=>e.l(t))).then(()=>t(141475)))},622424,e=>{e.v(t=>Promise.all(["static/chunks/41bbef03efd5b450.js"].map(t=>e.l(t))).then(()=>t(75431)))},941756,e=>{e.v(t=>Promise.all(["static/chunks/e203a20ba44bb05c.js"].map(t=>e.l(t))).then(()=>t(372062)))},587561,e=>{e.v(t=>Promise.all(["static/chunks/154edca6ea7942d5.js"].map(t=>e.l(t))).then(()=>t(161105)))},840251,e=>{e.v(t=>Promise.all(["static/chunks/fef08db4eee072bb.js"].map(t=>e.l(t))).then(()=>t(843335)))},555574,e=>{e.v(t=>Promise.all(["static/chunks/d70da1d19d9fcb8c.js"].map(t=>e.l(t))).then(()=>t(294804)))},426313,e=>{e.v(t=>Promise.all(["static/chunks/01f183299d93678e.js"].map(t=>e.l(t))).then(()=>t(822858)))},729793,e=>{e.v(t=>Promise.all(["static/chunks/e9f410b01f651487.js"].map(t=>e.l(t))).then(()=>t(750618)))},848,e=>{e.v(t=>Promise.all(["static/chunks/6d2dbde5038f395a.js"].map(t=>e.l(t))).then(()=>t(983454)))},336834,e=>{e.v(t=>Promise.all(["static/chunks/7c68078f4574272e.js"].map(t=>e.l(t))).then(()=>t(624246)))},754313,e=>{e.v(t=>Promise.all(["static/chunks/c62750b0650e8d29.js"].map(t=>e.l(t))).then(()=>t(181818)))},290108,e=>{e.v(t=>Promise.all(["static/chunks/9641165414cdfd5d.js"].map(t=>e.l(t))).then(()=>t(131047)))},513565,e=>{e.v(t=>Promise.all(["static/chunks/725142beabd23a6b.js"].map(t=>e.l(t))).then(()=>t(968921)))},398942,e=>{e.v(t=>Promise.all(["static/chunks/791eb6ddd1bd8532.js"].map(t=>e.l(t))).then(()=>t(627700)))},646488,e=>{e.v(t=>Promise.all(["static/chunks/841289826d25c31c.js"].map(t=>e.l(t))).then(()=>t(341853)))},847773,e=>{e.v(t=>Promise.all(["static/chunks/9ccf3032ea483104.js"].map(t=>e.l(t))).then(()=>t(405230)))},538381,e=>{e.v(t=>Promise.all(["static/chunks/0308dc2206cc92ff.js"].map(t=>e.l(t))).then(()=>t(953420)))},501644,e=>{e.v(t=>Promise.all(["static/chunks/b1245ac63fbb76d9.js"].map(t=>e.l(t))).then(()=>t(680152)))},220304,e=>{e.v(t=>Promise.all(["static/chunks/3a35a93baa02a815.js"].map(t=>e.l(t))).then(()=>t(894619)))},117258,e=>{e.v(t=>Promise.all(["static/chunks/cdd2937c2722602f.js"].map(t=>e.l(t))).then(()=>t(770685)))}]);