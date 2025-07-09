// import Image from "next/image"
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  User,
  FileText,
  Edit3,
  Download,
  Zap,
  Shield,
  Star,
} from "lucide-react";
import { Link } from "react-router";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Buat CV Profesional dalam{" "}
            <span className="text-green-500">3 Langkah Mudah</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Platform terpercaya untuk membuat CV yang menarik dan profesional.
            Dapatkan pekerjaan impian Anda dengan CV yang menonjol.
          </p>

          {/* Process Steps */}
          <div className="flex justify-center items-center space-x-8 mb-12">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <User className="w-6 h-6 text-blue-600" />
              </div>
              <div className="w-16 h-0.5 bg-gray-300 mx-4"></div>
            </div>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <FileText className="w-6 h-6 text-blue-600" />
              </div>
              <div className="w-16 h-0.5 bg-gray-300 mx-4"></div>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <Edit3 className="w-6 h-6 text-blue-600" />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/cv-builder/personal-details">
              <Button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 text-lg rounded-lg cursor-pointer">
                Mulai Buat CV Gratis
              </Button>
            </Link>
            <Button
              variant="outline"
              className="border-gray-300 text-gray-700 px-8 py-3 text-lg rounded-lg bg-transparent"
            >
              Lihat Template
            </Button>
          </div>
        </div>
      </section>

      {/* Preview Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Interface yang Mudah dan Intuitif
              </h2>
              <p className="text-gray-600 mb-8">
                Dengan antarmuka yang user-friendly, Anda dapat mengisi detail
                pribadi, pengalaman kerja, dan keterampilan dengan mudah. Proses
                pembuatan CV menjadi lebih cepat dan efisien.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Form yang mudah diisi</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">
                    Upload foto profil dengan mudah
                  </span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Validasi data otomatis</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <img
                  src="/images/form-preview.png"
                  alt="CVKU Form Interface"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Mengapa Memilih CVKU?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Platform terlengkap untuk membuat CV profesional dengan
              fitur-fitur unggulan
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Cepat & Mudah
                </h3>
                <p className="text-gray-600">
                  Buat CV profesional hanya dalam 3 langkah sederhana. Hemat
                  waktu dengan template yang sudah dioptimalkan.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Aman & Terpercaya
                </h3>
                <p className="text-gray-600">
                  Data pribadi Anda aman dengan enkripsi tingkat tinggi. Privasi
                  dan keamanan adalah prioritas utama kami.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Star className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Template Premium
                </h3>
                <p className="text-gray-600">
                  Pilihan template profesional yang dirancang khusus untuk
                  berbagai industri dan posisi pekerjaan.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Cara Kerja CVKU
            </h2>
            <p className="text-xl text-gray-600">
              Proses pembuatan CV yang simpel dan efektif
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <User className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                1. Isi Detail Pribadi
              </h3>
              <p className="text-gray-600">
                Masukkan informasi dasar seperti nama, kontak, dan foto profil
                Anda
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <FileText className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                2. Tambah Pengalaman
              </h3>
              <p className="text-gray-600">
                Lengkapi dengan riwayat pendidikan, pengalaman kerja, dan
                keterampilan
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Download className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                3. Download CV
              </h3>
              <p className="text-gray-600">
                Pilih template favorit dan download CV Anda dalam format PDF
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-green-500 to-blue-600">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Siap Membuat CV Profesional?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Bergabunglah dengan ribuan pengguna yang telah berhasil mendapatkan
            pekerjaan impian mereka dengan CV dari CVKU
          </p>
          <Link to="/cv-builder/personal-details">
            <Button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 text-lg rounded-lg font-semibold cursor-pointer">
              Mulai Buat CV Sekarang
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
