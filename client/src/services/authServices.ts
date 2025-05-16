/**
 * Chỉ mang tính tham khảo, những đoạn code dưới đây có thể không được dùng
 * trong dự án nên có thể xóa đi tùy ý mọi người nha!
 */

/**
 * Axios
 */
import API from "@/lib/axios";

/**
 * Types
 */
import type {
  LoginResponse,
  LoginPayload,
  RegisterPayload,
  RegisterResponse,
  GetCurrentUserResponse,
} from "@/types/auth";

export const authService = {
  async register(data: RegisterPayload) {
    return API.post<RegisterResponse>("/auth/register", data);
  },

  async login(data: LoginPayload) {
    return API.post<LoginResponse>("/auth/login", data);
  },

  async logout(refreshToken: string) {
    return API.post("/auth/logout", { refreshToken });
  },

  async refreshToken(refreshToken: string) {
    return API.post("/auth/refresh-token", { refreshToken });
  },

  async getCurrentUser() {
    return API.get<GetCurrentUserResponse>("/user/current-user");
  },
};
