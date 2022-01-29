export default function formatCurrency(num) {
    return "Ks. " + Number(num.toFixed(1)).toLocaleString() + " ";
  }
  