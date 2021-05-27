from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import status, permissions, viewsets
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import MyTokenObtainPairSerializer, CustomUserSerializer
from .models import CustomUser

class ObtainTokenPairWithColorView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


class CustomUserCreate(APIView):
    permission_classes = (permissions.AllowAny,)

    def post(self, request, format='json'):
        serializer = CustomUserSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            if user:
                json = serializer.data
                return Response(json, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class HelloWorldView(APIView):
    
    def get(self, request):
        return Response(data={"hello":"world"}, status=status.HTTP_200_OK)

class NewHelloView(APIView):
    permission_classes = [permissions.AllowAny]
    
    def get(self, request):
        return Response(data={"hello":"world", "net":"ninja"}, status=status.HTTP_200_OK)